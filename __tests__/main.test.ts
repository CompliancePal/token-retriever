import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import nock from 'nock'
import {run} from '../src/run'

// shows how the runner will run a javascript action with env / stdout protocol
describe('test runs', () => {
  const token = 'token'

  beforeAll(() => {
    process.env['INPUT_TOKEN'] = token

    nock.disableNetConnect()

    nock('https://actions.compliancepal.eu')
      .get(`/tokens/${token}`)
      .reply(200, {
        token: 'clone-token'
      })
  })

  afterAll(() => {
    nock.cleanAll()
    nock.enableNetConnect()
  })

  it.skip('', async () => {
    const np = process.execPath
    const ip = path.join(__dirname, '..', 'lib', 'main.js')
    const options: cp.ExecFileSyncOptions = {
      env: process.env
    }
    process.stdout.write(cp.execFileSync(np, [ip], options).toString())
  })

  it('', async () => {
    await run()
    process.stdout.write(JSON.stringify(Object.keys(process.env)))
  })
})
