import * as React from 'react';
type PoppeChildrenProps = {
    onClick: (e: React.MouseEvent<any>) => void;
};
export type PopperProps = {
    TriggerComponent: React.ReactNode;
    children: React.ReactElement | ((props: PoppeChildrenProps) => React.ReactElement);
};
export declare const Popper: (props: PopperProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
