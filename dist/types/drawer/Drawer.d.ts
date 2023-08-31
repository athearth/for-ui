import React from 'react';
import { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
type Props = MuiDrawerProps & {
    headerChildren?: React.ReactNode;
    defaultWidth?: number;
    defaultHeight?: number;
    minWidth?: number;
    minHeight?: number;
    onClose?: () => void;
    className?: string;
};
export declare const DrawerAnchor: {
    readonly left: "left";
    readonly right: "right";
};
export type DrawerAnchor = typeof DrawerAnchor[keyof typeof DrawerAnchor];
export declare const Drawer: React.FC<Props>;
export {};
