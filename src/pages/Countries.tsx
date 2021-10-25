import { FC } from 'react'
import { useGetCountriesQuery } from 'gql'
import { CountryListItem } from './CountryListItem'
import { Typography } from '@mui/material'

export const Countries: FC = () => {
  const { loading, error, data } = useGetCountriesQuery()

  if (loading || !data) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div className="country-container">
      <Typography variant="h1">Countries</Typography>
      <ul>
        {data.countries.map((country) => (
          <CountryListItem key={country.code} {...country} />
        ))}
      </ul>
    </div>
  )
}
