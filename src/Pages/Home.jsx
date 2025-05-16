import { useNavigate } from "react-router-dom";


export default function Home(props) {
  const navigate = useNavigate();
  
  function signUp(event){

    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("Nom");
    const email = formData.get("Email");
  
    if (name && email) {
      props.setUser({ name, email });
      navigate('/Portfolio');
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  }

  return (
    <section>
      <h2 className='text-3xl font-bold text-black m-4'>Bienvenue sur mon site</h2>
      <form onSubmit = {signUp} className="flex flex-col justify-center items-center">
        <input name="Nom" type="text" className='border-[1px] m-2 h-8 w-70 rounded' placeholder=' Écriver votre username'/>
        <input name="Email" type="email" className='border-[1px] m-2 h-8 w-70 rounded' placeholder=' Écriver votre email'/>
        <button className="bg-gray-500 h-10 w-70 rounded text-white font-bold hover:bg-gray-800 transition-all duration-500">Sign in</button>
      </form>
    </section>
  )
}