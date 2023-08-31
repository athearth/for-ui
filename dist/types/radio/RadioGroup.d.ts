import React from 'react';
import { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup';
export interface RadioGroupProps extends MuiRadioGroupProps {
    children: React.ReactNode;
    required?: boolean;
    label?: string;
    error?: string;
    className?: string;
}
export declare const RadioGroup: React.VFC<RadioGroupProps>;
