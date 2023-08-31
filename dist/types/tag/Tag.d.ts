import { FC } from 'react';
import { ChipProps as MuiChipProps } from '@mui/material/Chip';
export type TagProps = MuiChipProps & {
    className?: string;
};
export declare const Tag: FC<TagProps>;
