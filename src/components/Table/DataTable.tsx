import type { Table, ColumnDef, PaginationState } from '@tanstack/react-table';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';
import { type ReactNode, useState } from 'react';
import { Button } from '../Button/Button.tsx';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

export const DataTable = <T, >(
  {
    data,
    columns,
    paginated,
    pageSize = 10
  }: {
    data: T[], columns: ColumnDef<T>[], paginated?: boolean, pageSize?: number
  }) => {
  const [ page, setPage ] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize,
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPage,
    state: {
      pagination: paginated ? page : undefined,
    },
  });

  return (
    <div>
      <table className="table">
        <thead>
        { table.getHeaderGroups().map(headerGroup => (
          <tr key={ headerGroup.id }>
            { headerGroup.headers.map(header => (
              <th key={ header.id } colSpan={ header.colSpan }>
                { flexRender(header.column.columnDef.header, header.getContext()) }
              </th>
            )) }
          </tr>
        )) }
        </thead>
        <tbody>
        { table.getRowModel().rows.map(row => (
          <tr key={ row.id }>
            { row.getVisibleCells().map(cell => (
              <td key={ cell.id }>
                { flexRender(cell.column.columnDef.cell, cell.getContext()) }
              </td>
            )) }
          </tr>
        )) }
        </tbody>
      </table>
      { paginated && <Pagination table={ table } currentPage={ page.pageIndex }/> }
    </div>
  );
};

const PaginateButton = (
  { label, active, ...props }:
  { label: string | ReactNode, onClick?: () => void, disabled?: boolean, active?: boolean }) => (
  <Button size="sm" join style={ active ? 'primary' : 'outline' } { ...props }>{ label }</Button>
);

const Pagination = <T, >(
  {
    table,
    currentPage
  }:
  {
    table: Table<T>,
    currentPage: number
  }) => {
  const step = 3;

  const buttons = Array.from({
    length: table.getPageCount()
  }, (_, index) => {
    // The first and the last page are always displayed
    const isMandatory = index == 0 || index == table.getPageCount() - 1

    const isMinShowed = currentPage - step < index
    const isMaxShowed = index < currentPage + step
    const isShowed = isMinShowed && isMaxShowed

    // Check if all conditions are met
    const isDisplayed = isMandatory || isShowed

    if ( isDisplayed ) {
      return (
        <PaginateButton key={ index }
                        label={ index + 1 }
                        active={ index == currentPage }
                        onClick={ () => table.setPageIndex(index) }/>
      );
    }

    const isSkipped = currentPage - step == index || currentPage + step == index;
    if ( isSkipped ) {
      return (
        <PaginateButton key={ index } disabled label="..." />
      );
    }

    return null;
  });

  return (
    <div className="join">
      <PaginateButton label={ <ArrowLeft size={ 16 }/> }
                      onClick={ () => table.previousPage() }
                      disabled={ !table.getCanPreviousPage() }/>
      { buttons }
      <PaginateButton label={ <ArrowRight size={ 16 }/> }
                      onClick={ () => table.nextPage() }
                      disabled={ !table.getCanNextPage() }/>
    </div>
  );
};