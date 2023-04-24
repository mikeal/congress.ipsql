# Congressional IPSQL Databases

Build: 4/24/2023, 9:14:10 AM

## Current Legislators

Parsed from [CSV](https://theunitedstates.io/congress-legislators/legislators-current.csv).

```
$ npx -q ipsql@latest import export https://theunitedstates.io/congress-legislators/legislators-current.csv s3://ipsql-open-data
```

```
CREATE TABLE `legislators-current.csv` (
  `last_name` VARCHAR(19),
  `first_name` VARCHAR(15),
  `middle_name` VARCHAR(23),
  `suffix` VARCHAR(3),
  `nickname` VARCHAR(7),
  `full_name` VARCHAR(30),
  `birthday` VARCHAR(10),
  `gender` VARCHAR(1),
  `type` VARCHAR(3),
  `state` VARCHAR(2),
  `district` INTEGER,
  `senate_class` INTEGER,
  `party` VARCHAR(11),
  `url` VARCHAR(37),
  `address` VARCHAR(61),
  `phone` VARCHAR(12),
  `contact_form` VARCHAR(69),
  `rss_url` VARCHAR(93),
  `twitter` VARCHAR(15),
  `twitter_id` VARCHAR(19),
  `facebook` VARCHAR(29),
  `youtube` VARCHAR(20),
  `youtube_id` VARCHAR(24),
  `mastodon` VARCHAR(36),
  `bioguide_id` VARCHAR(7),
  `thomas_id` INTEGER,
  `opensecrets_id` VARCHAR(9),
  `lis_id` VARCHAR(4),
  `fec_ids` VARCHAR(29),
  `cspan_id` INTEGER,
  `govtrack_id` INTEGER,
  `votesmart_id` INTEGER,
  `ballotpedia_id` VARCHAR(37),
  `icpsr_id` INTEGER,
  `wikipedia_id` VARCHAR(39)
)
s3://ipsql-open-data/bafyreidwn352wn76azqfr35ouyl7f4knhr76jxpdb526tpcipevp5rnuim.cid
```

### Sample Queries

This query will return information on all the female congress members currently serving.

SQL

```
SELECT party, state, type, full_name FROM `legislators-current.csv` WHERE gender = "F" ORDER BY party, state, type, full_name
```

CLI
```
npx -q ipsql@latest query s3://ipsql-open-data/bafyreidwn352wn76azqfr35ouyl7f4knhr76jxpdb526tpcipevp5rnuim.cid 'SELECT party, state, type, full_name FROM `legislators-current.csv` WHERE gender = "F" ORDER BY party, state, type, full_name'
```

Output
```
"Democrat","AK","rep","Mary Sattler Peltola"
"Democrat","AL","rep","Terri A. Sewell"
"Democrat","CA","rep","Anna G. Eshoo"
"Democrat","CA","rep","Barbara Lee"
"Democrat","CA","rep","Doris O. Matsui"
"Democrat","CA","rep","Grace F. Napolitano"
"Democrat","CA","rep","Judy Chu"
"Democrat","CA","rep","Julia Brownley"
"Democrat","CA","rep","Katie Porter"
"Democrat","CA","rep","Linda T. Sánchez"
"Democrat","CA","rep","Maxine Waters"
"Democrat","CA","rep","Nancy Pelosi"
"Democrat","CA","rep","Nanette Diaz Barragán"
"Democrat","CA","rep","Norma J. Torres"
"Democrat","CA","rep","Sara Jacobs"
"Democrat","CA","rep","Sydney Kamlager-Dove"
"Democrat","CA","rep","Zoe Lofgren"
"Democrat","CA","sen","Dianne Feinstein"
"Democrat","CO","rep","Brittany Pettersen"
"Democrat","CO","rep","Diana DeGette"
"Democrat","CO","rep","Yadira Caraveo"
"Democrat","CT","rep","Jahana Hayes"
"Democrat","CT","rep","Rosa L. DeLauro"
"Democrat","DC","rep","Eleanor Holmes Norton"
"Democrat","DE","rep","Lisa Blunt Rochester"
"Democrat","FL","rep","Debbie Wasserman Schultz"
"Democrat","FL","rep","Frederica S. Wilson"
"Democrat","FL","rep","Kathy Castor"
"Democrat","FL","rep","Lois Frankel"
"Democrat","FL","rep","Sheila Cherfilus-McCormick"
"Democrat","GA","rep","Lucy McBath"
"Democrat","GA","rep","Nikema Williams"
"Democrat","HI","rep","Jill N. Tokuda"
"Democrat","HI","sen","Mazie K. Hirono"
"Democrat","IL","rep","Delia C. Ramirez"
"Democrat","IL","rep","Janice D. Schakowsky"
"Democrat","IL","rep","Lauren Underwood"
"Democrat","IL","rep","Nikki Budzinski"
"Democrat","IL","rep","Robin L. Kelly"
"Democrat","IL","sen","Tammy Duckworth"
"Democrat","KS","rep","Sharice Davids"
"Democrat","MA","rep","Ayanna Pressley"
"Democrat","MA","rep","Katherine M. Clark"
"Democrat","MA","rep","Lori Trahan"
"Democrat","MA","sen","Elizabeth Warren"
"Democrat","ME","rep","Chellie Pingree"
"Democrat","MI","rep","Debbie Dingell"
"Democrat","MI","rep","Elissa Slotkin"
"Democrat","MI","rep","Haley M. Stevens"
"Democrat","MI","rep","Hillary J. Scholten"
"Democrat","MI","rep","Rashida Tlaib"
"Democrat","MI","sen","Debbie Stabenow"
"Democrat","MN","rep","Angie Craig"
"Democrat","MN","rep","Betty McCollum"
"Democrat","MN","rep","Ilhan Omar"
"Democrat","MN","sen","Amy Klobuchar"
"Democrat","MN","sen","Tina Smith"
"Democrat","MO","rep","Cori Bush"
"Democrat","NC","rep","Alma S. Adams"
"Democrat","NC","rep","Deborah K. Ross"
"Democrat","NC","rep","Kathy E. Manning"
"Democrat","NC","rep","Valerie P. Foushee"
"Democrat","NH","rep","Ann M. Kuster"
"Democrat","NH","sen","Jeanne Shaheen"
"Democrat","NH","sen","Margaret Wood Hassan"
"Democrat","NJ","rep","Bonnie Watson Coleman"
"Democrat","NJ","rep","Mikie Sherrill"
"Democrat","NM","rep","Melanie A. Stansbury"
"Democrat","NM","rep","Teresa Leger Fernandez"
"Democrat","NV","rep","Dina Titus"
"Democrat","NV","rep","Susie Lee"
"Democrat","NV","sen","Catherine Cortez Masto"
"Democrat","NV","sen","Jacky Rosen"
"Democrat","NY","rep","Alexandria Ocasio-Cortez"
"Democrat","NY","rep","Grace Meng"
"Democrat","NY","rep","Nydia M. Velázquez"
"Democrat","NY","rep","Yvette D. Clarke"
"Democrat","NY","sen","Kirsten E. Gillibrand"
"Democrat","OH","rep","Emilia Strong Sykes"
"Democrat","OH","rep","Joyce Beatty"
"Democrat","OH","rep","Marcy Kaptur"
"Democrat","OH","rep","Shontel M. Brown"
"Democrat","OR","rep","Andrea Salinas"
"Democrat","OR","rep","Suzanne Bonamici"
"Democrat","OR","rep","Val T. Hoyle"
"Democrat","PA","rep","Chrissy Houlahan"
"Democrat","PA","rep","Madeleine Dean"
"Democrat","PA","rep","Mary Gay Scanlon"
"Democrat","PA","rep","Summer L. Lee"
"Democrat","PA","rep","Susan Wild"
"Democrat","TX","rep","Jasmine Crockett"
"Democrat","TX","rep","Lizzie Fletcher"
"Democrat","TX","rep","Sheila Jackson Lee"
"Democrat","TX","rep","Sylvia R. Garcia"
"Democrat","TX","rep","Veronica Escobar"
"Democrat","VA","rep","Abigail Davis Spanberger"
"Democrat","VA","rep","Jennifer L. McClellan"
"Democrat","VA","rep","Jennifer Wexton"
"Democrat","VI","rep","Stacey E. Plaskett"
"Democrat","VT","rep","Becca Balint"
"Democrat","WA","rep","Kim Schrier"
"Democrat","WA","rep","Marie Gluesenkamp Perez"
"Democrat","WA","rep","Marilyn Strickland"
"Democrat","WA","rep","Pramila Jayapal"
"Democrat","WA","rep","Suzan K. DelBene"
"Democrat","WA","sen","Maria Cantwell"
"Democrat","WA","sen","Patty Murray"
"Democrat","WI","rep","Gwen Moore"
"Democrat","WI","sen","Tammy Baldwin"
"Independent","AZ","sen","Kyrsten Sinema"
"Republican","AK","sen","Lisa Murkowski"
"Republican","AL","sen","Katie Boyd Britt"
"Republican","AS","rep","Aumua Amata Coleman Radewagen"
"Republican","AZ","rep","Debbie Lesko"
"Republican","CA","rep","Michelle Steel"
"Republican","CA","rep","Young Kim"
"Republican","CO","rep","Lauren Boebert"
"Republican","FL","rep","Anna Paulina Luna"
"Republican","FL","rep","Kat Cammack"
"Republican","FL","rep","Laurel M. Lee"
"Republican","FL","rep","Maria Elvira Salazar"
"Republican","GA","rep","Marjorie Taylor Greene"
"Republican","IA","rep","Ashley Hinson"
"Republican","IA","rep","Mariannette Miller-Meeks"
"Republican","IA","sen","Joni Ernst"
"Republican","IL","rep","Mary E. Miller"
"Republican","IN","rep","Erin Houchin"
"Republican","IN","rep","Victoria Spartz"
"Republican","LA","rep","Julia Letlow"
"Republican","ME","sen","Susan M. Collins"
"Republican","MI","rep","Lisa C. McClain"
"Republican","MN","rep","Michelle Fischbach"
"Republican","MO","rep","Ann Wagner"
"Republican","MS","sen","Cindy Hyde-Smith"
"Republican","NC","rep","Virginia Foxx"
"Republican","NE","sen","Deb Fischer"
"Republican","NY","rep","Claudia Tenney"
"Republican","NY","rep","Elise M. Stefanik"
"Republican","NY","rep","Nicole Malliotakis"
"Republican","OK","rep","Stephanie I. Bice"
"Republican","OR","rep","Lori Chavez-DeRemer"
"Republican","PR","rep","Jenniffer González-Colón"
"Republican","SC","rep","Nancy Mace"
"Republican","TN","rep","Diana Harshbarger"
"Republican","TN","sen","Marsha Blackburn"
"Republican","TX","rep","Beth Van Duyne"
"Republican","TX","rep","Kay Granger"
"Republican","TX","rep","Monica De La Cruz"
"Republican","VA","rep","Jennifer Kiggans"
"Republican","WA","rep","Cathy McMorris Rodgers"
"Republican","WV","rep","Carol D. Miller"
"Republican","WV","sen","Shelley Moore Capito"
"Republican","WY","rep","Harriet M. Hageman"
"Republican","WY","sen","Cynthia M. Lummis"

```

