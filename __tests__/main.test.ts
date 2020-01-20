import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs (true)', () => {
  process.env['INPUT_COND'] = 'true'
  process.env['INPUT_IF_TRUE'] = 'value-if-true'
  process.env['INPUT_IF_FALSE'] = 'value-if-false'
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecSyncOptions = {
    env: process.env
  }
  console.log(cp.execSync(`node ${ip}`, options).toString())
})

test('test runs (false)', () => {
  process.env['INPUT_COND'] = 'false'
  process.env['INPUT_IF_TRUE'] = 'value-if-true'
  process.env['INPUT_IF_FALSE'] = 'value-if-false'
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecSyncOptions = {
    env: process.env
  }
  console.log(cp.execSync(`node ${ip}`, options).toString())
})

test('test runs (empty)', () => {
  process.env['INPUT_COND'] = 'true'
  process.env['INPUT_IF_TRUE'] = ''
  process.env['INPUT_IF_FALSE'] = 'value-if-false'
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecSyncOptions = {
    env: process.env
  }
  console.log(cp.execSync(`node ${ip}`, options).toString())
})
