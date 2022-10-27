import { createContext, useState, ReactNode } from 'react';
import { Teste } from "./interfaces/teste";

interface ProviderProps extends Teste {
}
export const Contexto = createContext<ProviderProps>({} as ProviderProps) /* <ProviderProps>({} as ProviderProps) */

export const Provider = ({ children }: { children: ReactNode }) => {
    const [cards, setCards] = useState<any[]>([]);

    const [cardName, setCardName] = useState('');
    const [motiveName, setMotiveName] = useState('');
    const [phrase, setPhrase] = useState('');
    const [timeAmount, setTimeAmount] = useState(0);

    function CardName(e: React.FormEvent<HTMLInputElement>) {
        setCardName(e.currentTarget.value);
    }
    function MotiveName(e: React.FormEvent<HTMLInputElement>) {
        setMotiveName(e.currentTarget.value);
    }
    function Phrase(e: React.FormEvent<HTMLTextAreaElement>) {
        setPhrase(e.currentTarget.value);
    }
    function TimeAmount(e: React.FormEvent<HTMLInputElement>) {
        setTimeAmount(parseInt(e.currentTarget.value));
    }
    return (
        <Contexto.Provider value={{
            cards,
            cardname: cardName,
            motiveCard: motiveName,
            textArea: phrase,
            timerCard: timeAmount,
            handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                setCards([...cards, {
                    cardName,
                    motiveName,
                    phrase,
                    timeAmount
                }])
            },
            handleCardName: CardName,
            handleMotiveName: MotiveName,
            handlePhrase: Phrase,
            handleTimeAmount: TimeAmount
        }}>
            {children}
        </Contexto.Provider>
    );

}