import fetch from 'node-fetch'

export const getCloneToken = async (tokenStr: string): Promise<string> => {
  const res = await fetch(`https://actions.compliancepal.eu/tokens/${tokenStr}`)

  if (!res.ok) throw new Error('Invalid token')

  const {token}: {token: string} = await res.json()

  return `x-access-token:${token}`
}
