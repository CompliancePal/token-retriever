import fetch from 'node-fetch'

export const getToken = async (): Promise<string> => {
  const tokenUrl = process.env.TOKEN_URL

  if (tokenUrl === undefined) throw new Error('TOKEN_URL not set')

  const res = await fetch(tokenUrl)

  const {token}: {token: string} = await res.json()

  return `x-access-token:${token}`
}
