import NavBar from './NavBar'

export default function Header() {
  return (
        <header className='h-20 flex justify-evenly items-center bg-[#507ca9]'>
            <h1 className='font-extrabold text-2xl'>Kersen Joseph</h1>
            <NavBar></NavBar>
        </header>
    )
}