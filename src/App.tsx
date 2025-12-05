import { Card } from "./components/Card"
import { Board } from "./components/Board"
import { Header } from "./components/Header"
import { useState } from "react"

function App() {
  const[cardOpen,setCarOpen] = useState(true)
  const[boardOpen,setBoardOpen] = useState(true)
  const cardClass = cardOpen ? 'col-span-1' : 'col-span-2';
  const cardBoardClass = boardOpen ? 'col-span-1' : 'col-span-2';

  return (
    <div className="grid grid-cols-2 justify-center items-center h-auto w-full min-w-screen min-h-screen ">
      <div className={`absolute align-middle gap-4 flex overflow-hidden bg-white/20 text-white backdrop-blur-lg top-0  w-20 rounded-r-full h-20`}>
            <button className="absolute -translate-y-1/2 mt-9 ml-5 text-3xl font-serif size-10 backdrop-blur-sm rounded-full hover:bg-blue-200/30" 
              onClick={() => setCarOpen(!cardOpen)}>
                {">"}
            </button>
      </div>
      <div className={`absolute align-middle gap-4 flex overflow-hidden bg-white/20 text-white backdrop-blur-lg top-0 right-0 w-20 rounded-l-full h-20`}>
            <button className="absolute -translate-y-1/2 mt-9 ml-5 text-3xl font-serif size-10 backdrop-blur-sm rounded-full hover:bg-blue-200/30" 
              onClick={() => setBoardOpen(!boardOpen)}>
                {"<"}
            </button>
      </div>
      { boardOpen && 
        <div className={`${cardClass} flex justify-center items-center w-full h-auto min-h-screen bg-radial-[at_20%_35%] from-orange-400 to-pink-500 to-85%`}>
          <Card/>
        </div>
      }
      { cardOpen && 
        <div className={`${cardBoardClass} justify-center flex items-center w-full h-auto min-h-screen bg-radial-[at_80%_85%] from-orange-400 to-blue-500 to-85%`}>
          <Board/>
        </div>
      }
    </div>
  )
}

export default App
