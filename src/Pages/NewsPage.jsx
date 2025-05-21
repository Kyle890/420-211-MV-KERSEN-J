import { useLocation,useNavigate } from "react-router-dom";
import { motion } from "motion/react"

export default function NewsPage() {
    
    const location = useLocation();
    const url = location.state?.url;

    const navigate = useNavigate();

    function changePage(){
        navigate("/Interest")
    }

  return (
    <div className="flex flex-col h-full w-full min-h-screen">
        <div className="translucent">
            <motion.button className="border-2 border-[#E2E2E2] bg-traslucent m-3 text-3xl w-10 h-10" 
                onClick={changePage}
                whileHover={{ scale: 1.5}}
                transition={{ duration: 0.4 }}
            >⭠</motion.button>
        </div>
        {
            url? <iframe src={url} className="w-full h-full min-h-screen" /> :
            <div className="flex justify-center items-center">
                <p>Le lien ne fonctionne pas</p>
            </div>
        }
    </div>
  );
}