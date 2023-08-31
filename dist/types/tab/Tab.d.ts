import { FC } from 'react';
import { TabProps as MuiTabProps } from '@mui/material/Tab';
export interface TabProps extends Omit<MuiTabProps, 'disableRipple'> {
    minWidth?: number;
}
export declare const Tab: FC<TabProps>;
