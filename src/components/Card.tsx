import { useEffect, useRef, useState } from "react"

type Tarea = {
    texto:string
}

export function Card(){
    const[tareaActual, setTareaActual] = useState('')
    const[listaTareas, setListaTareas] = useState<Tarea[]>([])
    
    const textRef = useRef<HTMLTextAreaElement>(null)

    useEffect(()=>{
        const textarea = textRef.current;
        if(textarea){
            textarea.style.height = 'auto'
            textarea.style.height = `${textarea.scrollHeight}px`
        }
    },[tareaActual])

    useEffect(() => {
            if(textRef.current){
                textRef.current.value = ''; 
                textRef.current.style.height = 'auto';
            }
        },[listaTareas])

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

    function ListaRender(){
        return(
            <>
                {listaTareas.map((tarea, index) => (
                    <div className="flex flex-col text-center text-2xl shadow-2xl rounded-2xl bg-white flex-wrap ">
                        <div className="h-auto">
                            <pre className="" key={index}>{tarea.texto}</pre>
                        </div>
                    </div>
                ))}
            </>
        )
    }

    return(
        <div className="flex flex-col w-10/12 min-w-2/3 h-auto gap-4">
            <div className="flex flex-col rounded-2xl text-center shadow-2xl bg-white flex-wrap">
                <header className="h-auto grow">
                    <textarea
                        ref={textRef}
                        
                        onChange={handleChangeTarea}
                        className="w-full text-center text-2xl mt-2 outline-none overflow-y-hidden"
                        id="inputCard"
                        rows={1}
                        placeholder="Add a todo, or use / for actions"
                    />
                </header>
                <div className="mb-1 h-1/3 border-t text-gray-800 border-black/20">
                    <button className="hover:bg-green-300 rounded-2xl pl-5 pr-5 mt-1" onClick={handleClickList}>+</button>
                </div>   
            </div>
            
            {listaTareas.length !== 0 && ListaRender()}
        </div>
    )
}

