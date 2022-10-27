import './styles/global.css';
import { PencilSimple, PlusCircle, Note, Clock, PlayCircle } from 'phosphor-react';
import { useState, useContext } from 'react';
import { CircleButton } from './components/CircleButton';
import { Heading } from './components/Heading';
import { Comment } from './Comment';
import { Contexto } from './Provider';
import { Input } from './components/Input';
import { TextArea } from './components/TextArea';
import { Timer } from './components/Timer';
import { Button } from './components/Button';

export function App() {
  const { handleSubmit, handleCardName, handleMotiveName, handlePhrase, handleTimeAmount, cardname, motiveCard, textArea, timerCard, cards } = useContext(Contexto)
  const [openClose, setOpenClose] = useState(false)
  const OpenModal = () => setOpenClose(!openClose)

  return (
    <div className='flex flex-col items-center'>
      <header className="bg-purple-200 h-20 w-screen flex justify-center">
        <nav className='flex items-center justify-between w-4/5'>
          <Heading className="text-2xl text-white">
            Adreline
          </Heading>
          <CircleButton onClick={OpenModal}>
            <PlusCircle size={32} />
          </CircleButton>
        </nav>

      </header>
      {openClose && (
        <div className='flex w-full max-w-screen-2xl justify-end mt-2'>
          <form onSubmit={handleSubmit} id='teste' action=""
            className="bg-purple-50 h-64 w-44 rounded-lg flex flex-col items-center">
            <Input.Div className="mt-5">
              <Input.Icon>
                <PencilSimple size={18} />
              </Input.Icon>
              <Input.Input
                onChange={handleCardName}
                type="text"
                placeholder="Card Name"
              />
            </Input.Div>
            <Input.Div className="mt-2 mb-2">
              <Input.Icon>
                <Note size={18} />
              </Input.Icon>
              <Input.Input
                onChange={handleMotiveName}
                type="text"
                placeholder="Motive Name"
              />
            </Input.Div>
            <TextArea
              onChange={handlePhrase}
              placeholder='Type one phrase' />
            <Timer.Div className="mt-2">
              <Timer.Icon>
                <Clock size={18} />
              </Timer.Icon>
              <Timer.Input
                onChange={handleTimeAmount}
              />
            </Timer.Div>
            <Button type='submit' className='mt-2'><PlayCircle size={18} color='#c084fc' /></Button>
          </form>
        </div>
      )}
      <section className='flex gap-4 bg-purple-300 mt-5 w-full max-w-screen-2xl rounded-lg py-4 px-4'>
        {cards.map(card => <Comment cardname={card.cardName} motiveCard={card.motiveName} textArea={card.phrase} timerCard={card.timeAmount} key={card.cardName} />)}
      </section>
    </div>
  )
}