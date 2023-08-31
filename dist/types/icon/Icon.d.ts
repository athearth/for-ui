import React from 'react';
import { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';
export type IconButtonProps = MuiIconButtonProps & {
    className?: string;
    children?: React.ReactNode;
};
export declare const IconButton: React.VFC<IconButtonProps>;
