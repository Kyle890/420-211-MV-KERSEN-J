import { useState, useEffect } from "react"
// three.js 


export default function Interest() {

  const APIKey = "apiKey=71e2d237466d485fa65283b702d2d872"
  const [motCle, setMotCle] = useState("");
  const [date, setDate] = useState("");
  const [pays, setPays] = useState("");
  const [newsData, setNewsData] = useState([])
  const [nbArticles, setNbArticles] = useState("...")

  useEffect(() => {
    async function fetchData(){
      if (motCle !== "") {
        try {
            const res = await fetch(`https://newsapi.org/v2/top-headlines?q=${motCle}&${APIKey}`);
            const data = await res.json();
            setNewsData(data.articles);
            setNbArticles(" " + data.totalResults);
          } catch (error) {
            console.error("Erreur lors de la récupération des données", error);
        }
      }
    };

    fetchData();

  }, [motCle]);

  function handleSubmit(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    const recherche = formData.get("motRecherche");
    setMotCle(recherche);
  }

  return (
    <section className="flex flex-col w-full h-full">
      <h2 className="text-6xl font-bold ml-4">K.NEWS</h2>
      <p className="ml-4">Objectif: Chercher les nouvelles en lignes a l'aide de mot clé et de filtre simple</p>
      <hr className="h-1 bg-black w-full"/>
      <form className="flex justify-center items-center flex-col" onSubmit={handleSubmit}>
        <input className="border-[2px] m-2 h-8 w-[35%] p-2 rounded" type="text" name="motRecherche" placeholder="Tapez un mot-clé pour filtrer les actualités (ex : Tesla, Apple, Trump)"/>
        <p>Nombre d'article trouvé{nbArticles}</p>
        <button className="bg-gray-500 h-10 w-70 rounded text-white font-bold hover:bg-gray-800 transition-all duration-500">Search</button>
      </form>
    </section>
  )
}