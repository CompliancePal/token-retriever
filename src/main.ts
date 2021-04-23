import * as core from '@actions/core'
import {getToken} from './get-token'

async function run(): Promise<void> {
  try {
    const tokenStr: string = core.getInput('token')

    const token = await getToken(tokenStr)

    core.setSecret(token)
    core.setOutput('token', token)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
