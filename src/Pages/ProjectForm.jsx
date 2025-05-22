
export default function ProjectForm({ setProjets }){

    function handleSubmit(event) {
        event.preventDefault();
    }

    return(
        <form className='flex flex-col' onSubmit = {handleSubmit}>
            <label>Nom :
                <input 
                    type="projectName" 
                    placeholder="Nom du projet"
                    name="projectName"
                    className="p-2"
                    required
                />
            </label>
            <label htmlFor="description">Description :</label>
            <textarea id="description" name="description"></textarea>

            <fieldset className="flex flex-col">
                <legend>Langage :</legend>
                
                <label>
                    <input 
                        type="checkbox"
                        name="langage" 
                        value="JavaScript" 
                    />
                    JavaScript
                </label>
                    
                <label>
                    <input 
                        type="checkbox"
                        name="langage" 
                        value="HTML"
                    />
                    HTML
                </label>

                <label>
                    <input 
                        type="checkbox" 
                        name="langage" 
                        value="CSS" 
                    />
                    Css
                </label>

                <label>
                    <input 
                        type="checkbox" 
                        name="langage" 
                        value="Java" 
                    />
                    Java
                </label>

                <label>
                    <input 
                        type="checkbox" 
                        name="langage" 
                        value="SQL" 
                    />
                    SQL
                </label>

                <label>
                    <input 
                        type="checkbox" 
                        name="langage" 
                        value="Autre" 
                    />
                    Autre
                </label>

            </fieldset>
            
            <select name="IDE" id="IDE" defaultValue="" required>
                <option value="" disabled>-- Choisissez l'IDE utilisé --</option>
                <option value="VS Code"></option>
                <option value="IntelliJ">IntelliJ IDEA</option>
                <option value="Eclipse">Eclipse</option>
                <option value="BlueJ">BlueJ</option>
                <option value="Autre">Autre</option>
            </select>
            <label>Lien vers le projet : <input type="url" name="lienProject"/></label>
            <button>Ajouter</button>
        </form>
    )
}