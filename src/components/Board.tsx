export function Board(){
    return(
        <div className="flex flex-col w-2/3 h-50 rounded-2xl shadow-2xs bg-gray-200 flex-wrap">
            <header className="outline-black/20 h-1/4 p-2">
                To Do - Today
            </header>
            <div className="h-1/2 bg-gray-300 rounded-3xl ml-2.5 mr-2.5 text-center items-center justify-center flex text-black/20">
                Arrastra una Tarea
            </div>
            <div className="grid grid-cols-2 p-3 h-1/6">
                <button className="hover:bg-gray-300 text-left rounded-2xl">+ Add a Card</button>
            </div>
        </div>
    )
}
