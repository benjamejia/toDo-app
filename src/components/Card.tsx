export function Card(){
    return(
        <div className="flex flex-col w-2/3 h-30 rounded-2xl text-center text-2xl shadow-2xl bg-white flex-wrap">
            <header className="h-auto grow">
                <textarea
                    className="text-[18px] w-full text-center outline-none overflow-y-hidden"
                    id="inputCard"
                    rows={3}
                    placeholder="Add a todo, or use / for actions"
                />
            </header>
            <div className="p-3 pt-0 grid grid-cols-3 h-1/3 border-t border-black/20">
                <button className="hover:bg-gray-100">+</button>
                <button className="hover:bg-gray-100">=</button>
                <button className="hover:bg-gray-100">+</button>
            </div>
        </div>
    )
}