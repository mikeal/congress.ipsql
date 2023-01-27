# Congressional IPSQL Databases

Build: 1/27/2023, 8:14:31 PM

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
s3://ipsql-open-data/bafyreifskirpe2cpcsikumxa2xk2i7oxhalj3bajc4at5w6vdac35nfslu.cid
```

### Sample Queries

This query will return information on all the female congress members currently serving.

SQL

```
SELECT party, state, type, full_name FROM `legislators-current.csv` WHERE gender = "F" ORDER BY party, state, type, full_name
```

CLI
```
npx -q ipsql@latest query s3://ipsql-open-data/bafyreifskirpe2cpcsikumxa2xk2i7oxhalj3bajc4at5w6vdac35nfslu.cid 'SELECT party, state, type, full_name FROM `legislators-current.csv` WHERE gender = "F" ORDER BY party, state, type, full_name'
```

Output
```

```

