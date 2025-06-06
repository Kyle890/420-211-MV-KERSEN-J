import NavBar from './NavBar'

export default function Header() {
  return (
        <>
            <header className='h-20 flex justify-evenly items-center bg-[#A9A9A9]'>
                <h1 className='font-bold text-2xl text-black'>KJ Website</h1>
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
                    <stop offset="0%" stopColor="#A9A9A9" />
                    <stop offset="70%" stopColor="#E2E2E2" />
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