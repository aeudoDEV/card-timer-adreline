import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode;
    className?:string;
}
export function Button({children, className, ...props}: ButtonProps){
    return(
        <button {...props} className={clsx('transition hover:bg-purple-300 w-36 h-5 bg-purple-200 rounded flex justify-center items-center font-light text-xs',{

        },className)}>{children}</button>
    );
}