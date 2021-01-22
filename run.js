#!/usr/bin/env node
import { execSync as exec } from 'child_process'

const csv = `https://theunitedstates.io/congress-legislators/legislators-current.csv`
const command = `npx -q ipsql@latest import export ${ csv } s3://ipsql-open-data`

const buildOutput = exec(command)

const uri = buildOutput.slice(buildOutput.lastIndexOf('s3://'))

const sql = 'SELECT party, state, type, full_name FROM `legislators-current.csv` WHERE gender = "F" ORDER BY party, state, type, full_name'

const query = `npx -q ipsql@latest query s3://ipsql-open-data/bafyreietsf42p3rgich3mr6uenf26vrnzobmq5mlb4kpwwxlxyevdcgvqm.cid '${ sql }'`

const readme = `# Congressional IPSQL Databases

Build: ${ (new Date()).toLocaleString('en-US') }

## Current Legislators

Parsed from [CSV](${ csv }).

\`\`\`
$ ${ command }
\`\`\`

\`\`\`
${ buildOutput }
\`\`\`

### Sample Queries

This query will return information on all the female congress members currently serving.

SQL

\`\`\`
${ sql }
\`\`\`

CLI
\`\`\`
${ query }
\`\`\`

Output
\`\`\`
${ exec(query) }
\`\`\`
`
console.log(readme)
