import React, { FC } from 'react'
import { CountryFragment, Maybe } from 'gql'

type CountryListItemProps = {
  capital: Maybe<string>
}

export const CountryListItem: FC<CountryFragment> = ({ name, code }) => {
  return (
    <li>
      {name} - {code}
    </li>
  )
}
