import clsx from "clsx";
import { TextareaHTMLAttributes } from "react";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    children?:string;
    className?:string;
};
export function TextArea({children, className, ...props}: TextAreaProps){
    return(
        <textarea
        {...props}
        name="" 
        id=""
        placeholder='Type one phrase'
        maxLength={63}
        cols={3}
        rows={3}
        className={clsx("px-1 overflow-hidden resize-none w-36 h-24 bg-purple-200 text-white text-xs rounded-lg outline-none focus-within:ring-purple-400 focus-within:ring-2 placeholder:text-purple-400 placeholder:text-center",className)}
        >
            {children}
        </textarea>
    );
}