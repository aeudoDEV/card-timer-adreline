import { ReactNode } from "react";

export interface Teste{
    cardname: string;
    motiveCard:string;
    textArea:string;
    timerCard:ReactNode;
    Test?:(e: React.FormEvent<HTMLFormElement>)=>void;
}