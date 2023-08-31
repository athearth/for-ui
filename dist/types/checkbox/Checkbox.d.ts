import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';
export type CheckboxProps = MuiCheckboxProps & {
    label?: string;
    nopadding?: boolean;
    iconsize?: number | string;
    className?: string;
};
export declare const Checkbox: ({ label, nopadding, disabled, className, ...rest }: CheckboxProps) => import("@emotion/react/jsx-runtime").JSX.Element;
