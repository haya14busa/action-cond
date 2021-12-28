import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const cond: string = core.getInput('cond', {required: true})
    const ifTrue: string = core.getInput('if_true')
    const ifFalse: string = core.getInput('if_false')
    core.setOutput('value', cond === 'true' ? ifTrue : ifFalse)
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    } else {
      core.setFailed(JSON.stringify(error))
    }
  }
}

run()
