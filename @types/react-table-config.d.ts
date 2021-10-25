import 'react-table'
import { TableCellProps as MuiTableCellProps } from '@mui/material'

declare module 'react-table' {
  export interface TableOptions<D extends object = {}> extends UseSortByOptions<D> {}

  export interface Hooks<D extends object = {}> extends UseSortByHooks<D> {}

  export interface TableInstance<D extends object = {}> extends UseSortByInstanceProps<D> {}

  export interface TableState<D extends object = {}> extends UseSortByState<D> {}

  export interface ColumnInterface<D extends object = {}> extends UseSortByColumnOptions<D> {
    muiProps?: MuiTableCellProps
  }

  export interface ColumnInstance<D extends object = {}> extends UseSortByColumnProps<D> {
    muiProps?: MuiTableCellProps
  }
}
