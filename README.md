# Congressional IPSQL Databases

Build: 1/13/2022, 5:14:47 AM

## Current Legislators

Parsed from [CSV](https://theunitedstates.io/congress-legislators/legislators-current.csv).

```
$ npx -q ipsql@latest import export https://theunitedstates.io/congress-legislators/legislators-current.csv s3://ipsql-open-data
```

```
CREATE TABLE `legislators-current.csv` (
  `last_name` VARCHAR(17),
  `first_name` VARCHAR(11),
  `middle_name` VARCHAR(14),
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
  `contact_form` VARCHAR(70),
  `rss_url` VARCHAR(106),
  `twitter` VARCHAR(15),
  `facebook` VARCHAR(32),
  `youtube` VARCHAR(20),
  `youtube_id` VARCHAR(24),
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
s3://ipsql-open-data/bafyreihbwo22uli7bueofv25nccc2snk3esbstcfnkjxm5w7vx2ibxl3zy.cid
```

### Sample Queries

This query will return information on all the female congress members currently serving.

SQL

```
SELECT party, state, type, full_name FROM `legislators-current.csv` WHERE gender = "F" ORDER BY party, state, type, full_name
```

CLI
```
npx -q ipsql@latest query s3://ipsql-open-data/bafyreihbwo22uli7bueofv25nccc2snk3esbstcfnkjxm5w7vx2ibxl3zy.cid 'SELECT party, state, type, full_name FROM `legislators-current.csv` WHERE gender = "F" ORDER BY party, state, type, full_name'
```

Output
```
"Democrat","AL","rep","Terri Sewell"
"Democrat","AZ","rep","Ann Kirkpatrick"
"Democrat","AZ","sen","Kyrsten Sinema"
"Democrat","CA","rep","Anna G. Eshoo"
"Democrat","CA","rep","Barbara Lee"
"Democrat","CA","rep","Doris O. Matsui"
"Democrat","CA","rep","Grace F. Napolitano"
"Democrat","CA","rep","Jackie Speier"
"Democrat","CA","rep","Judy Chu"
"Democrat","CA","rep","Julia Brownley"
"Democrat","CA","rep","Karen Bass"
"Democrat","CA","rep","Katie Porter"
"Democrat","CA","rep","Linda T. Sánchez"
"Democrat","CA","rep","Lucille Roybal-Allard"
"Democrat","CA","rep","Maxine Waters"
"Democrat","CA","rep","Nancy Pelosi"
"Democrat","CA","rep","Nanette Diaz Barragán"
"Democrat","CA","rep","Norma J. Torres"
"Democrat","CA","rep","Sara Jacobs"
"Democrat","CA","rep","Zoe Lofgren"
"Democrat","CA","sen","Dianne Feinstein"
"Democrat","CO","rep","Diana DeGette"
"Democrat","CT","rep","Jahana Hayes"
"Democrat","CT","rep","Rosa L. DeLauro"
"Democrat","DC","rep","Eleanor Holmes Norton"
"Democrat","DE","rep","Lisa Blunt Rochester"
"Democrat","FL","rep","Debbie Wasserman Schultz"
"Democrat","FL","rep","Frederica S. Wilson"
"Democrat","FL","rep","Kathy Castor"
"Democrat","FL","rep","Lois Frankel"
"Democrat","FL","rep","Stephanie N. Murphy"
"Democrat","FL","rep","Val Butler Demings"
"Democrat","GA","rep","Carolyn Bourdeaux"
"Democrat","GA","rep","Lucy McBath"
"Democrat","GA","rep","Nikema Williams"
"Democrat","HI","sen","Mazie K. Hirono"
"Democrat","IA","rep","Cynthia Axne"
"Democrat","IL","rep","Cheri Bustos"
"Democrat","IL","rep","Janice D. Schakowsky"
"Democrat","IL","rep","Lauren Underwood"
"Democrat","IL","rep","Marie Newman"
"Democrat","IL","rep","Robin L. Kelly"
"Democrat","IL","sen","Tammy Duckworth"
"Democrat","KS","rep","Sharice Davids"
"Democrat","MA","rep","Ayanna Pressley"
"Democrat","MA","rep","Katherine M. Clark"
"Democrat","MA","rep","Lori Trahan"
"Democrat","MA","sen","Elizabeth Warren"
"Democrat","ME","rep","Chellie Pingree"
"Democrat","MI","rep","Brenda L. Lawrence"
"Democrat","MI","rep","Debbie Dingell"
"Democrat","MI","rep","Elissa Slotkin"
"Democrat","MI","rep","Haley M. Stevens"
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
"Democrat","NH","rep","Ann Kuster"
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
"Democrat","NY","rep","Carolyn B. Maloney"
"Democrat","NY","rep","Grace Meng"
"Democrat","NY","rep","Kathleen M. Rice"
"Democrat","NY","rep","Nydia M. Velázquez"
"Democrat","NY","rep","Yvette D. Clarke"
"Democrat","NY","sen","Kirsten E. Gillibrand"
"Democrat","OH","rep","Joyce Beatty"
"Democrat","OH","rep","Marcy Kaptur"
"Democrat","OH","rep",null
"Democrat","OR","rep","Suzanne Bonamici"
"Democrat","PA","rep","Chrissy Houlahan"
"Democrat","PA","rep","Madeleine Dean"
"Democrat","PA","rep","Mary Gay Scanlon"
"Democrat","PA","rep","Susan Wild"
"Democrat","TX","rep","Eddie Bernice Johnson"
"Democrat","TX","rep","Lizzie Fletcher"
"Democrat","TX","rep","Sheila Jackson Lee"
"Democrat","TX","rep","Sylvia R. Garcia"
"Democrat","TX","rep","Veronica Escobar"
"Democrat","VA","rep","Abigail Davis Spanberger"
"Democrat","VA","rep","Elaine G. Luria"
"Democrat","VA","rep","Jennifer Wexton"
"Democrat","VI","rep","Stacey E. Plaskett"
"Democrat","WA","rep","Kim Schrier"
"Democrat","WA","rep","Marilyn Strickland"
"Democrat","WA","rep","Pramila Jayapal"
"Democrat","WA","rep","Suzan K. DelBene"
"Democrat","WA","sen","Maria Cantwell"
"Democrat","WA","sen","Patty Murray"
"Democrat","WI","rep","Gwen Moore"
"Democrat","WI","sen","Tammy Baldwin"
"Republican","AK","sen","Lisa Murkowski"
"Republican","AS","rep","Aumua Amata Coleman Radewagen"
"Republican","AZ","rep","Debbie Lesko"
"Republican","CA","rep","Michelle Steel"
"Republican","CA","rep","Young Kim"
"Republican","CO","rep","Lauren Boebert"
"Republican","FL","rep","Kat Cammack"
"Republican","GA","rep","Marjorie Taylor Greene"
"Republican","IA","rep","Ashley Hinson"
"Republican","IA","rep","Mariannette Miller-Meeks"
"Republican","IA","sen","Joni Ernst"
"Republican","IL","rep","Mary E. Miller"
"Republican","IN","rep","Jackie Walorski"
"Republican","IN","rep","Victoria Spartz"
"Republican","LA","rep","Julia Letlow"
"Republican","ME","sen","Susan M. Collins"
"Republican","MI","rep","Lisa C. McClain"
"Republican","MN","rep","Michelle Fischbach"
"Republican","MO","rep","Ann Wagner"
"Republican","MO","rep","Vicky Hartzler"
"Republican","MS","sen","Cindy Hyde-Smith"
"Republican","NC","rep","Virginia Foxx"
"Republican","NE","sen","Deb Fischer"
"Republican","NM","rep","Yvette Herrell"
"Republican","NY","rep","Claudia Tenney"
"Republican","NY","rep","Elise M. Stefanik"
"Republican","NY","rep","Nicole Malliotakis"
"Republican","OK","rep","Stephanie I. Bice"
"Republican","PR","rep","Jenniffer González-Colón"
"Republican","SC","rep","Nancy Mace"
"Republican","TN","rep","Diana Harshbarger"
"Republican","TN","sen","Marsha Blackburn"
"Republican","TX","rep","Beth Van Duyne"
"Republican","TX","rep","Kay Granger"
"Republican","WA","rep","Cathy McMorris Rodgers"
"Republican","WA","rep","Jaime Herrera Beutler"
"Republican","WV","rep","Carol D. Miller"
"Republican","WV","sen","Shelley Moore Capito"
"Republican","WY","rep","Liz Cheney"
"Republican","WY","sen","Cynthia M. Lummis"

```

