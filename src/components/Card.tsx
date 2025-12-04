import { useEffect, useState } from "react"

type Tarea = {
    texto:string
}

export function Card(){
    const[tareaActual, setTareaActual] = useState('')
    const[listaTareas, setListaTareas] = useState<Tarea[]>([])

    const handleChangeTarea = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setTareaActual(e.currentTarget.value)
    };

    const handleClickList = () =>{
        if(tareaActual.trim() !== ''){
            const nuevaTarea: Tarea = {
                texto: tareaActual.trim()
            };
            setListaTareas([...listaTareas,nuevaTarea]);

            setTareaActual('')
            console.log(listaTareas)
        }
        return;
    }

    const listaRender = (
        <div className="flex flex-col w-auto min-w-2/3 h-auto rounded-2xl text-center text-2xl shadow-2xl bg-white flex-wrap mt-3">
            <div className="p-3 pt-0 grid grid-cols-3 h-1/3 border-t border-black/20">
                {listaTareas.map((tarea, index) => (
                    <p key={index}>{tarea.texto}</p>
                ))}
            </div>
        </div>
    )

    return(
        <>
            <div className="flex flex-col w-auto min-w-2/3 h-auto rounded-2xl text-center text-2xl shadow-2xl bg-white flex-wrap">
                <header className="h-auto grow">
                    <textarea
                        onChange={handleChangeTarea}
                        className="text-[18px] w-full text-center mt-2 outline-none overflow-y-hidden"
                        id="inputCard"
                        rows={1}
                        placeholder="Add a todo, or use / for actions"
                    />
                </header>
                <div className="p-3 pt-0 grid grid-cols-3 h-1/3 border-t border-black/20">
                    <button className="hover:bg-gray-100" onClick={handleClickList}>+</button>
                    <button className="hover:bg-gray-100">=</button>
                    <button className="hover:bg-gray-100">+</button>
                </div>   
            </div>
            {listaRender}
        </>
    )
}

