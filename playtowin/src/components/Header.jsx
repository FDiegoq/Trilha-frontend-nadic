const Header = () =>{
    return (
        <header className="p-8 text-white flex justify-between items-center">
            <h1 className="font-bold text-2xl hover:text-violet-950 transition-colors cursor-pointer">PlaytoWin</h1>
            <nav>
                <ul className="flex gap-4">
                    <li className="text-md hover:text-violet-950 transition-colors"><a href="/">Home</a></li>
                    <li className="text-md hover:text-violet-950 transition-colors"><a href="/about">About</a></li>
                    <li className="text-md hover:text-violet-950 transition-colors"><a href="/contacts">Contacts</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header