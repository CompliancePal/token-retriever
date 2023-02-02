import * as core from '@actions/core'
import {getToken} from './get-token'

async function run(): Promise<void> {
  try {
    const url = core.getInput('url')

    const token = await getToken(url)

    core.setSecret(token)
    core.setOutput('token', token)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
