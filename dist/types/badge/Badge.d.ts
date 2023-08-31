import React, { ReactNode } from 'react';
import { BadgeProps } from '@mui/material/Badge';
export interface Props extends BadgeProps {
    className?: string;
    children: ReactNode;
}
export declare const Badge: React.FC<Props>;
