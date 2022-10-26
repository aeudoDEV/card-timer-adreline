import { Clock } from 'phosphor-react';
import { ReactNode} from 'react';
import {Text} from './components/Text';

interface CommentProps{
    cardname: string;
    motiveCard:string;
    textArea:string;
    timerCard:ReactNode;
}
export function Comment(props:CommentProps){
    
    return(
       <div className="bg-purple-50 h-56 w-44 rounded-lg flex flex-col items-center">
        <Text className="bg-purple-400 mt-2 w-5/6 text-center rounded-2xl">{props.cardname}</Text>
        <Text size={'sm'} className="font-thin bg-purple-400 mt-2 w-5/6 text-center rounded-2xl">{props.motiveCard}</Text>
        <Text size={'sm'} className="font-thin bg-purple-400 mt-2 w-5/6 h-3/6 text-center rounded-2xl break-words py-1 px-1">{props.textArea}</Text>
        <Text size={'sm'} className="flex gap-1 items-center justify-center font-thin bg-purple-400 mt-2 mb-2 w-5/6 text-center rounded-2xl"><Clock size={18}/>{props.timerCard}</Text>
       </div> 
    );
}