import { FC } from 'react';
import { RadioProps as MuiRadioProps } from '@mui/material/Radio';
export interface RadioProps extends MuiRadioProps {
    label?: string;
    error?: string;
    nopadding?: boolean;
    className?: string;
}
export declare const Radio: FC<RadioProps>;
