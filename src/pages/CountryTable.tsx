import { useMemo } from 'react'
import { CountryFragment, useGetCountriesQuery } from 'gql'
import { Table } from 'components'
import { Column } from 'react-table'

export const CountryTable = () => {
  const { loading, error, data } = useGetCountriesQuery()

  const columns = useMemo(
    (): Array<Column<CountryFragment>> => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      // {
      //   Header: 'Native name',
      //   accessor: 'native',
      // },
      // {
      //   Header: 'Continent',
      //   accessor: (row) => row.continent.name,
      //   id: 'continent.name',
      //   disableSortBy: true,
      // },
      // {
      //   Header: 'Capital',
      //   accessor: 'capital',
      //   Cell: ({ value }) => value || '-',
      //   muiProps: { align: 'right' },
      // },
      // {
      //   Header: 'Currency',
      //   accessor: 'currency',
      //   Cell: ({ value }) => value?.replace(',', ', ') || 'N/A',
      // },
    ],
    []
  )

  const countries = useMemo(() => data?.countries || [], [data])
  console.log({ loading, error, countries })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return <Table columns={columns} data={countries || []} />
}
