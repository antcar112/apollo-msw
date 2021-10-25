import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import { useGetCountriesQuery } from 'gql'

export const CountryTable = () => {
  const { loading, error, data } = useGetCountriesQuery()

  if (loading || !data) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Native name</TableCell>
            <TableCell>Continent</TableCell>
            <TableCell>Capital</TableCell>
            <TableCell>Currency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.countries.map((country) => (
            <TableRow key={country.code}>
              <TableCell component="th" scope="row">
                {country.name}
              </TableCell>
              <TableCell>{country.native}</TableCell>
              <TableCell>{country.continent.name}</TableCell>
              <TableCell>{country.capital || 'N/A'}</TableCell>
              <TableCell>{country.currency || 'N/A'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
