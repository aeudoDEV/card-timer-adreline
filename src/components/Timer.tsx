import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TimerDivProps{
    children:ReactNode;
    className?:string;
};
interface TimerInputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?:string;
};
interface TimerIconProps{
    className?:string;
    children:ReactNode;
};

function TimerDiv({children, className}:TimerDivProps){
    return(
        <div className={clsx("py-0 px-1 h-6 w-16 gap-0.5 rounded-lg flex items-center bg-purple-200 text-white focus-within:ring-2 focus-within:ring-purple-400",className)}>
            {children}
        </div>
    );
}
function TimerInput(props:TimerInputProps){
    return(
        <input  {...props}
        type='number'
        placeholder='teste'
        className='w-full h-full text-center outline-none placeholder-purple-400 bg-transparent text-white'/>
    );
}
function TimerIcon(props:TimerIconProps){
    return(
        <p {...props} className='text-purple-400'>{props.children}</p>
    );

}
export const Timer = {
    Div:TimerDiv,
    Input:TimerInput,
    Icon: TimerIcon,
};

