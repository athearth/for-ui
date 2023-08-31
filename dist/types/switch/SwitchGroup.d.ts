import React from 'react';
import { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup';
export interface RadioGroupProps extends MuiRadioGroupProps {
    children: React.ReactNode;
    required?: boolean;
    label?: string;
    row?: boolean;
    error?: string;
}
export declare const SwitchGroup: React.VFC<RadioGroupProps>;
