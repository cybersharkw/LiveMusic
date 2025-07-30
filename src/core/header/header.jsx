import logo from '../../assets/logo/eventLogo.png'
import { Input } from '@/components/ui/input'

function Header(){
    return (
        
        <header className='flex sticky h-auto w-[80%] mx-auto my-6 p-2 border border-stone rounded-sm'>
            <nav className='flex flex-row items-center h-16 w-full justify-between'>
                <ul className='flex items-center gap-2'>
                   <img src={logo} alt="liveMusic" className="w-16 h-16 object-contain" />
                   <span className='text-xl font-semibold font-stretch-normal'>LiveMusic</span>
                </ul>
                <ul className='flex items-center w-[60%] gap-2'><Input/></ul>
                <ul className='flex items-center gap-2' >platzhalter</ul>
                <ul className='flex items-center gap-2'>platzhalter</ul>
            </nav>
        </header>
    )
}

export default Header