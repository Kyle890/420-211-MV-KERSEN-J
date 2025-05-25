import { useNavigate } from "react-router-dom";
import { motion } from "motion/react"

export default function Home(props) {
  
  const navigate = useNavigate();
  
  function signUp(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("Nom");
    const email = formData.get("Email");
  
    if (name && email) {
      props.setUser({ name, email });
      navigate("/Portfolio");
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  }

  return (
    <section>
      <div className="w-80 h-72 bg-[#E2E2E2] backdrop-blur-lg rounded-lg flex flex-col justify-center items-center shadow-gray-700 shadow-2xl">
        <h2 className="text-3xl font-bold text-black m-4">Bienvenue sur mon site</h2>
        <form onSubmit={signUp} className="flex flex-col justify-center items-center">
          <input 
            name="Nom" 
            type="text" 
            className="border-[1px] m-2 h-8 w-70 rounded p-2" 
            placeholder="Écrivez votre username" 
          />
          <input 
            name="Email" 
            type="email" 
            className="border-[1px] m-2 h-8 w-70 rounded p-2" 
            placeholder="Écrivez votre email" 
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-500 h-10 w-70 rounded text-white font-bold hover:bg-gray-800 transition-all duration-500"
          >Sign in
          </motion.button>
        </form>
      </div>
    </section>
  );
}