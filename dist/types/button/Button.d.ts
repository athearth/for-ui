import React from 'react';
import { LoadingButtonProps } from '@mui/lab/LoadingButton';
export type ButtonProps = Omit<LoadingButtonProps, 'color' | 'variant'> & {
    className?: string;
    variant?: 'filled' | 'contained' | 'outlined' | 'text';
    color?: 'primary' | 'secondary' | 'default';
};
export declare const Button: React.ForwardRefExoticComponent<ButtonProps>;
