import React from 'react';
import { SkeletonProps as MuiSkeletonProps } from '@mui/material/Skeleton';
export type SkeletonProps = MuiSkeletonProps & {
    loading?: boolean;
    className?: string;
    count?: number;
};
export declare const Skeleton: React.FC<SkeletonProps>;
type SkeletonXProps = MuiSkeletonProps & {
    loading?: boolean;
    empty?: React.ReactNode;
};
export declare const SkeletonX: React.FC<SkeletonXProps>;
export {};
