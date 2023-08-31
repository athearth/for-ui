import React from 'react';
export type DropzoneProps = {
    files: File[];
    message?: string;
    multiple?: boolean;
    onDrop: (acceptedFiles: File[]) => void;
    onRemove: (file: File) => (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
};
export declare const Dropzone: React.FC<DropzoneProps>;
