import { FC } from 'react'
import { Typography } from '@mui/material'
import { CountryTable } from './CountryTable'

export const Countries: FC = () => {
  return (
    <div className="country-container">
      <Typography variant="h1">Countries</Typography>
      <CountryTable />
    </div>
  )
}
