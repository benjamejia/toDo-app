import { useState } from "react"

export function Header(){
    const[isOpen,setIsOpen] = useState(false)
    const[dashboardOpen, setDashBoardOpen] = useState(false)
    const[todoListOpen,setTodoListOpen] = useState(false)
    const handleDashBoardOpen = () => {
        setDashBoardOpen(!dashboardOpen)
    }

    const handleToDoListOpen = () => {
        setTodoListOpen(!todoListOpen)
    }
    const handleClickIsOpen = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <div className={`absolute align-middle gap-4 flex overflow-hidden bg-white/20 text-white backdrop-blur-lg top-0  ${ isOpen ? "w-screen" : "w-20 rounded-r-full"} h-20 transition-all duration-500 ease-in-out`}>
            <button className=" absolute -translate-y-1/2 mt-9 ml-5 text-3xl font-serif size-10 backdrop-blur-sm rounded-full hover:bg-blue-200/30 transition-all 
                    duration-500 
                    ease-in-out" onClick={handleClickIsOpen}>
                =
            </button>
            { isOpen &&
                <button onClick={handleDashBoardOpen} className="text-2xl font-serif rounded-2xl h-10 mt-4.5 ml-20 pl-4 pr-4 hover:bg-pink-200/30">
                Dashboard
                </button>
            }
            { isOpen &&
                <button onClick={handleToDoListOpen} className="text-2xl font-serif rounded-2xl h-10 mt-4.5 pl-4 pr-4 hover:bg-blue-200/30">
                    To-Do list
                </button>
            }
        </div>
    )
}
