import clsx from "clsx";
import { ReactNode } from "react";

export interface HeadingProps{
    children:ReactNode;
    size?:'2xl'|'xl'|'lg';
    className?:string;

}
export function Heading({children,size = '2xl', className}: HeadingProps){
    return(
        <h2 className={clsx('',{
            'text-2xl': size == '2xl',
            'text-xl': size == 'xl',
            'text-lg': size == 'lg',
        },className)}>{children}</h2>
    );
}