import { motion } from "motion/react"

export default function ProjectForm({ setProjets }){

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const langages = formData.getAll("langages");
        const frameworks = formData.getAll("frameworks");

        const allData = {
            projectName: formData.get("projectName"),
            description: formData.get("description"),
            langages,
            frameworks,
            IDE: formData.get("IDE"),
            projectLink: formData.get("lienProject"),
            projectFiles: formData.getAll("projectFiles"),
        };

        console.log(allData);
        setProjets((prevProjets) => [...prevProjets, allData]);

        event.target.reset();
    };

    return(
        <form className='flex flex-col' onSubmit  = {handleSubmit}>
            <label>Nom du projet:
                <input 
                    type="projectName" 
                    name="projectName"
                    className="p-2"
                    required
                />
            </label>
            <label htmlFor="description">Description :</label>
            <textarea className="p-1" id="description" name="description"></textarea>

            <fieldset className="flex flex-col">
                <legend>Langage :</legend>
                {['JavaScript', 'HTML', 'CSS', 'Java', 'SQL', 'Autre'].map(lang => (
                <label key={lang} className="flex items-center">
                    <input 
                    type="checkbox" 
                    name="langages" 
                    value={lang} 
                    className="mr-2"
                    />
                    {lang}
                </label>
                ))}
            </fieldset>
            
            <select name="IDE" id="IDE" defaultValue="" required>
                <option value="" disabled>Choisissez l'IDE utilisé</option>
                <option value="VSCode">VS Code</option>
                <option value="IntelliJ">IntelliJ IDEA</option>
                <option value="Eclipse">Eclipse</option>
                <option value="BlueJ">BlueJ</option>
                <option value="Autre">Autre</option>
            </select>

            <fieldset className="flex flex-col">
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

            <label htmlFor="projectFiles">Télécharger des fichiers :</label>
            <input
                type="file"
                name="projectFiles"
                accept="image/*"
                multiple
                className="p-2 border border-gray-300 rounded"
            />

            <label htmlFor="lienProject">Lien vers le projet :</label>
            <input
                type="url"
                name="lienProject"
                id="lienProject"
                className="p-2 border border-gray-300 rounded"
            />
            <motion.button
                type="submit"
                className="p-2 bg-blue-200 text-white rounded hover:bg-blue-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Ajouter
            </motion.button>
        </form>
    )
}