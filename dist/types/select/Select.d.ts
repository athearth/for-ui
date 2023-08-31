import React, { FC } from 'react';
import { UseAutocompleteProps } from '@mui/material';
export type SelectOption = {
    label: string;
    inputValue: string;
};
export type AutocompleteProps = Omit<UseAutocompleteProps<SelectOption, boolean, boolean, boolean>, 'autoComplete'> & {
    name: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    loadingText?: React.ReactNode;
    disabled?: boolean;
    className?: string;
    disableFilter?: boolean;
};
export declare const Select: FC<AutocompleteProps>;
