import React, { FC } from 'react'
import { useGetCountriesQuery } from './gql'

export const Countries: FC = () => {
  const { loading, error, data } = useGetCountriesQuery()

  if (loading || !data) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div className="country-container">
      <h1>Countries</h1>
      <ul>
        {data.countries.map(({ name, emoji, code, phone }) => (
          <li key={name}>
            {name}: {emoji} - {code} - {phone}
          </li>
        ))}
      </ul>
    </div>
  )
}
