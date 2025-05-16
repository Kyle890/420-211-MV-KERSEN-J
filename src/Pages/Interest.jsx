import { useState, useEffect } from "react"
// three.js 


export default function Interest() {

  const APIKey = "apiKey=71e2d237466d485fa65283b702d2d872"
  const [motCle, setMotCle] = useState("");
  const [date, setDate] = useState("");
  const [pays, setPays] = useState("");
  const [newsData, setNewsData] = useState([])

  useEffect(() => {
    async function fetchData(){
      if (motCle !== "") {
        try {
            const res = await fetch(`https://newsapi.org/v2/top-headlines?q=${motCle}`);
            const data = await res.json();
            setDataMemes(data.data.memes);
        } catch (error) {
            console.error("Erreur lors de la récupération des données", error);
        }
      }
    };

    fetchData();

  }, [motCle]);

  return (
    <section className="flex flex-col">
      <h2>K.NEWS</h2>
    </section>
  )
}
