import { FC, MouseEvent } from 'react';
import { ColumnSort, RowData, TableOptions, Row as RowType } from '@tanstack/react-table';
export type TableProps<T extends RowData> = Pick<TableOptions<T>, 'data' | 'columns' | 'getRowId'> & {
    disablePagination?: boolean | undefined;
    defaultSortColumn?: ColumnSort;
    /** onRowClick is called when each row is clicked regardless of the type of table (selectable or not) */
    onRowClick?: (e: MouseEvent<HTMLTableRowElement>, row: RowType<T>) => void;
    /** The component used to render reach row. By default, Row is used. */
    rowRenderer?: FC<RowProps<T>>;
    className?: string;
    pageSize?: number;
} & ({
    /** If wanting to use selectable table, specify _onSelectRow_ or _onSelectRows_ exclusively */
    onSelectRow?: ((id: string | undefined) => void) | undefined;
    onSelectRows?: never;
} | {
    onSelectRow?: never;
    /** If wanting to use selectable table, specify _onSelectRow_ or _onSelectRows_ exclusively */
    onSelectRows?: ((ids: string[]) => void) | undefined;
});
export declare const Table: <T extends unknown>({ data, disablePagination, defaultSortColumn, onSelectRow, onSelectRows, onRowClick, rowRenderer, getRowId, columns, pageSize, className, }: TableProps<T>) => import("@emotion/react/jsx-runtime").JSX.Element;
export type RowProps<T extends RowData> = {
    row: RowType<T>;
    selectable: boolean;
    onClick: (e: MouseEvent<HTMLTableRowElement>, row: RowType<T>) => void;
    className?: string;
};
export declare const Row: <T extends unknown>({ row, selectable, onClick, className }: RowProps<T>) => import("@emotion/react/jsx-runtime").JSX.Element;
export { createColumnHelper } from '@tanstack/react-table';
