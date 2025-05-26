import { motion } from "motion/react"
import OnlyYou from "../assets/OnlyYou.mp3"

export default function ProjectForm({ setProjets }){

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const langages = formData.getAll("langages");
        const frameworks = formData.getAll("frameworks");
        const files = formData.getAll("projectFiles");
    
        const fileURLs = files.map(file => URL.createObjectURL(file));
    
        const allData = {
            projectName: formData.get("projectName"),
            description: formData.get("description"),
            langages,
            frameworks,
            IDE: formData.get("IDE"),
            projectLink: formData.get("lienProject"),
            projectFiles: fileURLs,
        };
    
        setProjets((prevProjets) => [...prevProjets, allData]);
    
        event.target.reset();

        alert("Projet ajouté: " + formData.get("projectName"))
    }

    return(
        <motion.form className='flex flex-col p-8 m-20 bg-[#E2E2E2]/80 bg-blur-lg rounded-xl shadow-gray-500 shadow-2xl border border-gray-300 w-[45%]' initial={{translateY : 200}} animate={{translateY: 0}} onSubmit  = {handleSubmit}>
            <h2 className="text-3xl font-bold m-3">Ajouter un projet</h2>
            <audio controls autoPlay loop src={OnlyYou}></audio>
            <label className="m-3">Nom du projet:
                <input 
                    type="projectName" 
                    name="projectName"
                    className="p-2 m-3 border-2 rounded border-gray-300"
                    required
                />
            </label>
            <label htmlFor="description" className="m-3">Description :</label>
            <textarea className="p-2 m-3 h-[15vh] border-2 rounded-2xl border-gray-300" id="description" name="description"></textarea>

            <fieldset className="flex flex-col m-3">
                <legend>Langage :</legend>
                {['JavaScript', 'HTML', 'CSS', 'Java', 'SQL', 'Autre'].map(lang => (
                <label key={lang} className="flex items-center">
                    <input 
                    type="checkbox" 
                    name="langages" 
                    value={lang} 
                    className="m-2"
                    />
                    {lang}
                </label>
                ))}
            </fieldset>
            
            <select name="IDE" id="IDE" defaultValue="" required className="m-3 border-2 rounded border-gray-300 h-[3vh]">
                <option value="" disabled>Choisissez l'IDE utilisé</option>
                <option value="VSCode">VS Code</option>
                <option value="IntelliJ">IntelliJ IDEA</option>
                <option value="Eclipse">Eclipse</option>
                <option value="BlueJ">BlueJ</option>
                <option value="Autre">Autre</option>
            </select>

            <fieldset className="flex flex-col m-3">
                <legend>Bibliothèque/Framework :</legend>
                {['React', 'Motion', 'Tailwind', 'Spring', 'Hibernate', 'Autre'].map(framework => (
                <label key={framework} className="flex items-center">
                    <input 
                    type="checkbox" 
                    name="frameworks" 
                    value={framework} 
                    className="m-2"
                    />
                    {framework}
                </label>
                ))}
            </fieldset>

            <label className="m-3" htmlFor="projectFiles">Télécharger des fichiers :</label>
            <input
                type="file"
                name="projectFiles"
                accept="image/*"
                multiple
                className="p-2 m-2 border-2 rounded border-gray-300"
            />

            <label className="m-3" htmlFor="lienProject">Lien vers le projet :</label>
            <input
                type="url"
                name="lienProject"
                id="lienProject"
                className="p-2 m-2 border-2 rounded border-gray-300"
            />
            <motion.button
                type="submit"
                className="p-2 bg-blue-200 text-white rounded hover:bg-blue-400 m-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Ajouter
            </motion.button>
        </motion.form>
    )
}