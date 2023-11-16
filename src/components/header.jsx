import React from 'react'
import logo from './../assets/icon/LOGO-NAME.png';

export default function Header() {
    return (

        <nav className='dark:bg-zinc-900/50 dark:text-gray-100 dark:border-zinc-600/50 border-b
        bg-slate-400/80 border-slate-100/75 h-14 xl:px-64 lg:px-32 md:px-8 min-[920px]:px-16 backdrop-blur-sm'>
            <div className="flex items-center h-full">
                <div id='logo' className="flex items-center h-full hover:scale-110 ease-in-out duration-300">
                    <img className=' h-32 w-auto mr-1' src={logo} alt="" />
                </div>
            </div>  
        </nav>

    )
}