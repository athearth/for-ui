import React from 'react';
import { FormControlLabelProps } from '@mui/material/FormControlLabel';
export type SwitchProps = Omit<FormControlLabelProps, 'control'> & {
    value?: unknown;
    className?: string;
};
export declare const Switch: React.FC<SwitchProps>;
