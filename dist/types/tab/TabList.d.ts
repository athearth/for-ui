import { FC } from 'react';
import { TabListProps as MuiTabListProps } from '@mui/lab/TabList';
export interface TabListProps extends MuiTabListProps {
    noBorder?: boolean;
    reverse?: boolean;
    color?: 'primary' | 'secondary';
}
export declare const TabList: FC<TabListProps>;
