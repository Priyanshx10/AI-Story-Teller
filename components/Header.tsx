import Link from 'next/link'
import { BookOpen, FilePen } from 'lucide-react';

function Header() {
  return (
    <header className='relative text-center p-16'>
        <Link href="/">
            <h1  className='text-6xl font-black'>Magic Stories</h1>
            <div className='flex justify-center whitespace-norap space-x-5 text-3xl lg:text-5xl'>
                <h2>Turning stories</h2>
                <div className=' relative'>
                    <div className=' absolute bg-sky-500 -left-2 -top-1 -bottom-1 
                    -right-2 md:-left-3 md:-top-0  md:-bottom-0 md:-right-3 -rotate-1' />
                        <p className='relative text-white'>To Reality!</p>
                </div>
            </div>
        </Link>

 {/*Nav Icons */}
        <div className='absolute -top-5 right-5 flex space-x-2'>
            <Link href="/">
                <FilePen className = 'border text-sky-500 w-8 h-8 lg:10 lg:h-10 mx-auto mt-10 border-sky-500 p-2 rounded-md hover:opacity-50 cursor-pointer'/>
            </Link>
            <Link href="/stories">
                <BookOpen className = " border w-8 h-8 lg:10 lg:h-10 mx-auto text-sky-500 mt-10 border-sky-500 p-2 rounded-md hover:opacity-50 cursor-pointer"/>
            </Link>

        </div>
    </header>
  )
}

export default Header