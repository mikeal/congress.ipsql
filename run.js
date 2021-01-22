#!/usr/bin/env node
import { execSync as exec } from 'child_process'

const csv = `https://theunitedstates.io/congress-legislators/legislators-current.csv`
const command = `npx -q ipsql@latest import export ${ csv } s3://ipsql-open-data`

const readme = `# Congressional IPSQL Databases

Build: ${ (new Date()).toLocaleString('en-US') }

## Current Legislators

Parsed from [CSV](${ csv }).

\`\`\`
$ ${ command }
\`\`\`

\`\`\`
${ exec(command) }
\`\`\`
`
console.log(readme)
