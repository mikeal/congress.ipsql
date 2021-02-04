#!/usr/bin/env node
import { promisify } from 'util'
import { exec as baseExec } from 'child_process'

const exec = promisify(baseExec)

const run = async () => {
  const csv = `https://theunitedstates.io/congress-legislators/legislators-current.csv`
  const command = `npx -q ipsql@latest import export ${ csv } s3://ipsql-open-data`

  const { stdout, stderr } = await exec(command)
  const buildOutput = stderr + stdout

  const uri = stdout

  const sql = 'SELECT party, state, type, full_name FROM `legislators-current.csv` WHERE gender = "F" ORDER BY party, state, type, full_name'

  const query = `npx -q ipsql@latest query ${ uri } '${ sql }'`

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
${ (await exec(query)).stdout.toString() }
\`\`\`
`
  console.log(readme)
}
run()
