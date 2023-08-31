import React from 'react';
import { DividerProps as MuiDividerProps } from '@mui/material/Divider';
export type DividerProps = MuiDividerProps & {
    className?: string;
};
export declare const Divider: React.FC<DividerProps>;
