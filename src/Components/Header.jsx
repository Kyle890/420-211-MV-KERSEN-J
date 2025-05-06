import NavBar from './NavBar'

export default function Header() {
  return (
        <>
            <header className='h-20 flex justify-evenly items-center bg-[#395886]'>
                <h1 className='font-extrabold text-2xl text-white'>Kersen Joseph</h1>
                <NavBar></NavBar>
            </header>
            <svg
                className="w-full h-[80px] block -mt-1"
                viewBox="0 0 1440 100"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#395886" />
                    <stop offset="70%" stopColor="#8AAEE0" />
                    <stop offset="100%" stopColor="#B1C9EF" />
                </linearGradient>
                </defs>
                <path
                    fill="url(#grad)"
                    d="M0,64L80,61.3C160,59,320,53,480,64C640,75,800,101,960,101.3C1120,101,1280,75,1360,61.3L1440,48L1440,0L0,0Z"
                />
            </svg>
        </>
    )
}