import { FC } from 'react'
import { Typography } from '@mui/material'
import { useName } from './useName'

export const NameHeader: FC = () => {
  const { name } = useName()
  return (
    <Typography variant="h5" paragraph>
      {name}
    </Typography>
  )
}
