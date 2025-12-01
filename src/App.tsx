import { Card } from "./components/Card"
import { Board } from "./components/Board"

function App() {

  return (
    <div className="grid grid-cols-2 justify-center items-center h-full w-full min-w-screen min-h-screen ">
      <div className="flex justify-center items-center w-full h-screen bg-radial-[at_20%_35%] from-orange-400 to-pink-500 to-85%">
        <Card/>
      </div>
      <div className="flex justify-center items-center w-full h-screen bg-radial-[at_80%_85%] from-orange-400 to-blue-500 to-85%">
        <Board/>
      </div>
    </div>
  )
}

export default App
