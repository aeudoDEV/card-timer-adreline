import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";


export interface CircleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode;
    className?:string;
}
export function CircleButton({className, children, ...props}:CircleButtonProps){
    return(
        <button {...props} className={clsx('items-center justify-center  flex transition rounded-full h-16 w-16 bg-purple-300 text-white hover:bg-purple-400',{

        },className)}>{children}</button>
    );
}