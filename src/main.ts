import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const cond: string = core.getInput('cond', {required: true})
    const ifTrue: string = core.getInput('if_true', {required: true})
    const ifFalse: string = core.getInput('if_false', {required: true})
    core.setOutput('value', cond === 'true' ? ifTrue : ifFalse)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
