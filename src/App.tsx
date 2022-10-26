import './styles/global.css';
import { PlusCircle } from 'phosphor-react';
import { useState, useContext } from 'react';
import { CircleButton } from './components/CircleButton';
import { Heading } from './components/Heading';
import {Comment} from './Comment';
import { Contexto, Provider } from './Provider';





export function App() {

  
  const  dados = useContext(Contexto)
  const [openClose, setOpenClose] = useState(false)
  const OpenModal = () => {setOpenClose(!openClose); console.log(openClose)}
  const post = [{
    id:dados.cardname,
    tv:dados.motiveCard,
    pc:dados.textArea,
    xb:dados.timerCard,
      
  }]
  function oi(){
    console.log(dados.Test)
  }
  return (
      <div className='flex flex-col items-center'>
        <header className="bg-purple-200 h-20 w-screen flex justify-center">
          <nav className='flex items-center justify-between w-4/5'>
            <Heading className="text-2xl text-white">
              Adreline
            </Heading>
            <CircleButton onClick={OpenModal}>
              <PlusCircle size={32}/>
            </CircleButton>
          </nav>
          
        </header>
        {openClose && (<div className='flex w-full max-w-screen-2xl justify-end mt-2'>
          <Provider/>
        </div>)}
        <section className='flex gap-4 bg-purple-300 mt-5 w-full max-w-screen-2xl rounded-lg py-4 px-4'>
          <form onSubmit={dados.Test}>
            <>
            <Comment cardname={'eee'} motiveCard={'eee'} textArea={'ee'} timerCard={'ee'}/>
            {dados.Test}
            </>
          </form>
        </section>
        
        
      </div>
  )
}