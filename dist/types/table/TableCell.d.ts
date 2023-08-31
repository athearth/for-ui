import { PropsWithChildren } from 'react';
export type TableCellProps = PropsWithChildren<{
    component?: 'th' | 'td';
    className?: string;
}>;
export declare const TableCell: ({ component, className, children, ...rest }: TableCellProps) => import("@emotion/react/jsx-runtime").JSX.Element;
