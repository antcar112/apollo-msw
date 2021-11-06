import { FC } from 'react'
import { Button, Typography } from '@mui/material'
import { CountryTable } from './CountryTable'

import { NameHeader } from './NameHeader'
import { useName } from './useName'

export const Countries: FC = () => {
  const { name, setName } = useName()

  return (
    <div className="country-container">
      <Typography variant="h1">Countries</Typography>
      <NameHeader />
      <Button onClick={() => setName('User One')} variant="outlined">
        User One
      </Button>
      <Button onClick={() => setName('User Two')} variant="outlined">
        User Two
      </Button>
      <Button onClick={() => setName('Default')} variant="outlined">
        Clear
      </Button>
      <Typography paragraph>{name}</Typography>
      <CountryTable />
    </div>
  )
}
