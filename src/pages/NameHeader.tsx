import { makeVar, useReactiveVar } from '@apollo/client'
import { FC } from 'react'
import { Typography } from '@mui/material'

export const currentUser = makeVar<string>('Default user')

export const NameHeader: FC = () => {
  const name = useReactiveVar(currentUser)
  return (
    <Typography variant="h5" paragraph>
      {name}
    </Typography>
  )
}
