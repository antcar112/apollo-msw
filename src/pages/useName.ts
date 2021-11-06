import { makeVar, useReactiveVar } from '@apollo/client'

export const currentUser = makeVar<string>('Default user')

export const useName = () => {
  const name = useReactiveVar(currentUser)
  const setName = (name: string) => currentUser(name)

  return { name, setName }
}
