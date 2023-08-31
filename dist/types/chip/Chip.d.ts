import { FC } from 'react';
import { ChipProps as MuiChipProps } from '@mui/material/Chip';
type ChipColorType = 'default' | 'negative' | 'white';
export type ChipProps = Omit<MuiChipProps, 'color' | 'icon' | 'deleteIcon' | 'size'> & {
    color?: ChipColorType;
    className?: string;
} & ({
    leadingIcon: MuiChipProps['icon'];
    trailingIcon?: never;
} | {
    leadingIcon?: never;
    trailingIcon?: MuiChipProps['deleteIcon'];
    onDelete?: MuiChipProps['onDelete'];
});
export declare const Chip: FC<ChipProps>;
export {};
