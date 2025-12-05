import { Card } from "./components/Card"
import { Board } from "./components/Board"
import { Header } from "./components/Header"

function App() {

  return (
    <div className="grid grid-cols-2 justify-center items-center h-auto w-full min-w-screen min-h-screen ">
      <Header/>
      <div className="flex justify-center items-center w-full h-auto min-h-screen bg-radial-[at_20%_35%] from-orange-400 to-pink-500 to-85%">
        <Card/>
      </div>
      <div className="flex justify-center items-center w-full h-auto min-h-screen bg-radial-[at_80%_85%] from-orange-400 to-blue-500 to-85%">
        <Board/>
      </div>
    </div>
  )
}

export default App
