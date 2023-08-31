import React from 'react';
export declare const sizes: {
    readonly xs: "xs";
    readonly s: "s";
    readonly r: "r";
    readonly xr: "xr";
    readonly l: "l";
    readonly xl: "xl";
};
export type Size = typeof sizes[keyof typeof sizes];
export declare const texts: {
    [key in Size]: string;
};
export declare const variants: {
    readonly h1: "h1";
    readonly h2: "h2";
    readonly h3: "h3";
    readonly h4: "h4";
    readonly h5: "h5";
    readonly h6: "h6";
    readonly subtitle1: "subtitle1";
    readonly subtitle2: "subtitle2";
    readonly p: "p";
    readonly body1: "body1";
    readonly body2: "body2";
    readonly span: "span";
    readonly caption: "caption";
};
export type Variant = typeof variants[keyof typeof variants];
interface Props {
    className?: string;
    variant?: Variant;
    bold?: boolean;
    children: React.ReactNode;
    disabled?: boolean;
}
export declare const typographyStyles: {
    [key in Variant]: string;
};
export declare const LegacyTypography: React.FC<Props>;
export declare const LegacyText: React.FC<Props>;
export {};
