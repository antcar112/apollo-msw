import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  TableCellProps,
} from '@mui/material'
import { ReactElement } from 'react'
import { Column, useTable, useSortBy } from 'react-table'

export type MuiColumn<D extends object> = Column<D> & { muiProps?: TableCellProps }

type TableProps<D extends object> = {
  columns: Array<MuiColumn<D>>
  data: Array<D>
}
export const Table = <D extends object>({ columns, data }: TableProps<D>): ReactElement => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<D>(
    {
      columns,
      data,
    },
    useSortBy
  )

  return (
    <TableContainer component={Paper}>
      <MuiTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <TableSortLabel
                    active={column.isSorted}
                    direction={column.isSortedDesc ? 'desc' : 'asc'}
                  >
                    {column.render('Header')}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </MuiTable>
    </TableContainer>
  )
}
