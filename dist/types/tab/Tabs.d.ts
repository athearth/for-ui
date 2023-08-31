import { FC } from 'react';
import { TabsProps as MuiTabsProps } from '@mui/material/Tabs';
export interface TabsProps extends MuiTabsProps {
    noBorder?: boolean;
    reverse?: boolean;
    color?: 'primary' | 'secondary';
}
export declare const Tabs: FC<TabsProps>;
