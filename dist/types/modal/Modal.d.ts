import React from 'react';
import { ModalProps as MuiModalProps } from '@mui/material/Modal';
export type ModalProps = Omit<MuiModalProps, 'children'> & {
    /** Whether the Dialog is open */
    open: boolean;
    children: React.ReactNode | React.ReactNode[];
    /** Handler that is called when the 'cancel' button of a dismissable Dialog is clicked. */
    onClose?(event: React.MouseEvent | React.KeyboardEvent): void;
    className?: string;
};
export declare const Modal: React.FC<ModalProps>;
