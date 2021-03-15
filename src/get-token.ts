import fetch from 'node-fetch'

export const getToken = async (tokenUrl: string): Promise<string> => {
  const res = await fetch(tokenUrl)

  const {token}: {token: string} = await res.json()

  return `x-access-token:${token}`
}
