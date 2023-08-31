import React from 'react';
export interface CardTitleProps {
    children: React.ReactNode | string;
}
export interface CardProps {
    className?: string;
    children: React.ReactNode;
}
export interface CardHeaderProps {
    title: React.ReactNode | string;
    className?: string;
    action?: React.ReactNode;
}
interface CardActionProps {
    children: React.ReactNode;
}
export declare const CardTitle: React.FC<CardTitleProps>;
export declare const CardAction: React.FC<CardActionProps>;
export declare const Card: React.FC<CardProps>;
export declare const CardHeader: React.FC<CardHeaderProps>;
export declare const CardBody: React.FC<{
    className?: string;
    children: React.ReactNode;
}>;
export {};
