import { useReactiveVar } from '@apollo/client'
import { FC } from 'react'
import { Button, Typography } from '@mui/material'
import { CountryTable } from './CountryTable'

import { NameHeader, currentUser } from './NameHeader'

export const Countries: FC = () => {
  const name = useReactiveVar(currentUser)

  return (
    <div className="country-container">
      <Typography variant="h1">Countries</Typography>
      <NameHeader />
      <Button onClick={() => currentUser('User One')} variant="outlined">
        User One
      </Button>
      <Button onClick={() => currentUser('User Two')} variant="outlined">
        User Two
      </Button>
      <Button onClick={() => currentUser('Default')} variant="outlined">
        Clear
      </Button>
      <Typography paragraph>{name}</Typography>
      <CountryTable />
    </div>
  )
}
