npx: installed 354 in 13.953s
# Congress Terms (FiveThirtyEight) in IPSQL

Build: 1/22/2021, 4:55:11 AM

## Current Legislators

Parsed from [CSV](https://theunitedstates.io/congress-legislators/legislators-current.csv).

```
$ npx ipsql@latest import export https://theunitedstates.io/congress-legislators/legislators-current.csv s3://ipsql-open-data
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
s3://ipsql-open-data/bafyreietsf42p3rgich3mr6uenf26vrnzobmq5mlb4kpwwxlxyevdcgvqm.cid

```

