import * as core from '@actions/core'
import {getCloneToken} from './get-clone-token'

export async function run(): Promise<void> {
  try {
    const tokenStr: string = core.getInput('token')

    const token = await getCloneToken(tokenStr)

    core.setSecret(token)
    core.setOutput('token', token)
  } catch (error) {
    core.setFailed(error.message)
  }
}
