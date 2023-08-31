import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
type WithInherit<T> = T | 'inherit';
type Size = 'xs' | 's' | 'r' | 'xr' | 'l' | 'xl';
type Weight = 'regular' | 'bold';
type Typeface = 'sansSerif' | 'monospaced';
export type TextProps<P extends ElementType> = ComponentPropsWithoutRef<P> & {
    /**
     * レンダリングするコンポーネントを指定 (例: h1, p, strong)
     * @default span
     */
    as?: P;
    /**
     * テキストのサイズを指定
     * @default inherit
     */
    size?: WithInherit<Size>;
    /**
     * 表示するテキストのウェイトを指定
     * @default inherit
     */
    weight?: WithInherit<Weight>;
    /**
     * 表示する書体の種別を指定
     * @default inherit
     */
    typeface?: WithInherit<Typeface>;
    className?: string;
    /**
     * 文字列またはstrong等のコンポーネント (HTML的にvalidになるようにしてください)
     */
    children: ReactNode;
};
export declare const Text: <P extends ElementType<any> = "span">({ as, size, weight, typeface, className, children, ...rests }: TextProps<P>) => JSX.Element;
export {};
