import fetch from 'node-fetch'

export const getToken = async (tokenStr: string): Promise<string> => {
  const res = await fetch(`https://actions.compliancepal.eu/tokens/${tokenStr}`)

  const {token}: {token: string} = await res.json()

  return `x-access-token:${token}`
}
