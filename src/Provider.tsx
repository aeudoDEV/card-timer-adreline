import { PencilSimple, Note, Clock, PlayCircle } from "phosphor-react";
import { createContext, useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { TextArea } from "./components/TextArea";
import { Timer } from "./components/Timer";
import { Teste } from "./interfaces/teste";
import { Comment } from "./Comment";

interface ProviderProps extends Teste{
    
}
export const Contexto = createContext<ProviderProps>({} as ProviderProps) /* <ProviderProps>({} as ProviderProps) */

export const Provider = () =>{

    const [cardName, setCardName] = useState('')
    const [motiveName, setMotiveName] = useState('')
    const [phrase, setPhrase] = useState('')
    const [timeAmount, setTimeAmount] = useState(0)

    function CardName(e: React.FormEvent<HTMLInputElement>){
    e.preventDefault
    const cardName = e.currentTarget.value
    setCardName(cardName)
    console.log(cardName)
}
    function MotiveName(e: React.FormEvent<HTMLInputElement>){
        e.preventDefault
        const motiveCard = e.currentTarget.value
        setMotiveName(motiveCard)
        console.log(motiveCard)
    }
    function Phrase(e: React.FormEvent<HTMLTextAreaElement>){
        e.preventDefault
        const cardPhrase = e.currentTarget.value
        setPhrase(cardPhrase)
        console.log(cardPhrase)
    }
    function TimeAmount(e: React.FormEvent<HTMLInputElement>){
        e.preventDefault
        const time = parseInt(e.currentTarget.value)

        setTimeAmount(time)
        console.log(time)
    }
    const Teste = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const item = [{
            cardname:cardName,
            motiveCard:motiveName,
            textArea:phrase,
            timerCard:timeAmount
        }]
        return item.map(conteudo=>{
           return(<Comment 
            cardname={conteudo.cardname} 
            motiveCard={conteudo.motiveCard} 
            textArea={conteudo.textArea} 
            timerCard={conteudo.timerCard}/>
            
            ); 
        })
        
        
    }
    return (
        <Contexto.Provider value={{
            cardname:cardName,
            motiveCard:motiveName,
            textArea:phrase,
            timerCard:timeAmount,
            Test:Teste
        }}>
            <form onSubmit={Teste} id='teste' action="" 
            className="bg-purple-50 h-64 w-44 rounded-lg flex flex-col items-center">
            <Input.Div className="mt-5">
                <Input.Icon>
                    <PencilSimple size={18}/>
                </Input.Icon>
                <Input.Input
                onChange={CardName}
                type="text"
                placeholder="Card Name"
                />
            </Input.Div>
            <Input.Div className="mt-2 mb-2">
                <Input.Icon>
                    <Note size={18}/>
                </Input.Icon>
                <Input.Input
                onChange={MotiveName}
                type="text"
                placeholder="Motive Name"
                />
            </Input.Div>
            <TextArea 
            onChange={Phrase}
            placeholder='Type one phrase'/>
            <Timer.Div className="mt-2">
                <Timer.Icon>
                    <Clock size={18}/> 
                </Timer.Icon>
                <Timer.Input
                
                onChange={TimeAmount}
                />
            </Timer.Div>
            <Button type='submit' className='mt-2'><PlayCircle size={18} color='#c084fc'/></Button>
            
        </form>
        </Contexto.Provider>
    );

}