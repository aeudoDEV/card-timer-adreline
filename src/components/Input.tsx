import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";


export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    children:ReactNode;
    className?: string;
};
interface InputInputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
};
interface InputIconProps {
    children:ReactNode;
}
function InputIcon(props:InputIconProps){
    return (
       <p className='text-purple-400 flex items-center'>
        {props.children}
       </p> 
    );
}
function InputInput(props:InputInputProps){
    return(
        <input {...props}
        className={clsx('text-sm w-full h-full outline-none text-white bg-transparent placeholder:text-purple-400')}/>
    );
}
function InputDiv({children, className}:InputProps){
    return(
        <div className={clsx("py-0 px-1.5 h-6 w-36 gap-1 rounded-lg flex items-center bg-purple-200 text-white focus-within:ring-2 focus-within:ring-purple-400 placeholder:text-black", className)}>
            {children}
        </div>
    );
}

export const Input = {
    Div: InputDiv,
    Input: InputInput,
    Icon: InputIcon
}