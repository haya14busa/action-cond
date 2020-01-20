# Conditional value - missing expression for GitHub Actions

[![test](https://github.com/haya14busa/action-cond/workflows/test/badge.svg)](https://github.com/haya14busa/action-cond/actions?query=workflow%3Atest)
[![reviewdog](https://github.com/haya14busa/action-cond/workflows/reviewdog/badge.svg)](https://github.com/haya14busa/action-cond/actions?query=workflow%3Areviewdog)
[![release](https://github.com/haya14busa/action-cond/workflows/release/badge.svg)](https://github.com/haya14busa/action-cond/actions?query=workflow%3Arelease)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/haya14busa/action-cond?logo=github&sort=semver)](https://github.com/haya14busa/action-cond/releases)

```yaml
inputs:
  cond:
    description: 'condition. [true,false]'
    required: true
  if_true:
    description: 'output value if cond is true'
    required: true
  if_false:
    description: 'output value if cond is false'
    required: true
outputs:
  value:
    description: 'output value'
```


## Usage:

```yaml
steps:
- uses: haya14busa/action-cond@v1
  id: condval
  with:
    cond: ${{ github.event_name == 'pull_request' }}
    if_true: "value for pull request event"
    if_false: "value for non pull request event"
- name: Use conditional value
  run: echo "${{ steps.condval.outputs.value }}"
```

### Change reviewdog reporter depending on event:

https://github.com/reviewdog/reviewdog
https://github.com/reviewdog/action-eslint

```yaml
steps:
- uses: actions/checkout@v1
- uses: haya14busa/action-cond@v1
  id: reporter
  with:
    cond: ${{ github.event_name == 'pull_request' }}
    if_true: "github-pr-review"
    if_false: "github-check"
- uses: reviewdog/action-eslint@v1
  with:
    github_token: ${{ secrets.github_token }}
    eslint_flags: 'src/**/*.ts'
    reporter: ${{ steps.reporter.outputs.value }}
```
