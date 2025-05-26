import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

export default function Interest({ setPage }) {
  const APIKey = "apiKey=71e2d237466d485fa65283b702d2d872";
  const [motCle, setMotCle] = useState("");
  const [date, setDate] = useState("");
  const [newsData, setNewsData] = useState([]);
  const [nbArticles, setNbArticles] = useState("...");
  const [visibleNews, setVisibleNews] = useState(20);

  useEffect(() => {
    async function fetchData() {
      if (motCle !== "") {
        try {
          let url = `https://newsapi.org/v2/everything?q=${motCle}`;
          if (date) {
            url += `&from=${date}&sortBy=publishedAt`;
          }
          url += `&${APIKey}`;

          const res = await fetch(url);
          const data = await res.json();
          setNewsData(data.articles);
          setNbArticles(" " + data.totalResults);
          setVisibleNews(20);
        } catch (error) {
          console.error("Erreur lors de la récupération des données", error);
        }
      }
    }

    fetchData();
  }, [motCle, date]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const recherche = formData.get("motRecherche");
    const selectedDate = formData.get("date");
    setMotCle(recherche);
    setDate(selectedDate);
  }

  const navigate = useNavigate();

  const openPage = (articleUrl) => {
    navigate("/NewsPage", { state: { url: articleUrl } });
  };

  return (
    <section className="flex flex-col w-full h-full">
      <h2 className="text-6xl font-bold ml-4">K.NEWS</h2>
      <p className="ml-4">
        Objectif: Chercher les nouvelles en ligne à l'aide de mots-clés et d'un filtre de date
      </p>
      <hr className="h-1 bg-black w-full" />
      <form
        className="flex justify-center items-center flex-col m-4"
        onSubmit={handleSubmit}
      >
        <input
          className="border-[2px] m-2 h-8 w-[35%] p-2 rounded"
          type="text"
          name="motRecherche"
          placeholder="Tapez un mot-clé pour filtrer les actualités (ex : Tesla, Apple)"
        />

        {/* Filtre Date */}
        <input
          className="border-[2px] m-2 h-8 w-[35%] p-2 rounded"
          type="date"
          name="date"
          max={new Date().toISOString().split("T")[0]} // Pas de date future
        />

        <p>Nombre d'articles trouvés{nbArticles}</p>
        <button className="bg-gray-500 h-10 w-70 rounded text-white font-bold hover:bg-gray-800 transition-all duration-500">
          Search
        </button>
      </form>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {newsData.slice(0, visibleNews).map((news) => (
          <motion.li
            key={news.url}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col justify-between h-full p-4">
              <h4 className="text-lg font-bold mb-2 line-clamp-2">{news.title}</h4>
              <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                {news.description || "Aucune description disponible."}
              </p>
              <div className="mt-auto">
                <p className="text-xs text-gray-500 mb-2">
                  {new Date(news.publishedAt).toLocaleString()}
                </p>
                <motion.button
                  onClick={() => openPage(news.url)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gray-400 text-white text-sm px-4 py-2 rounded hover:bg-gray-800 transition-colors duration-300"
                >
                  Lire l'article
                </motion.button>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>

      {visibleNews < newsData.length && (
        <div className="flex justify-center my-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setVisibleNews((prev) => prev + 20)}
            className="bg-gray-700 text-white px-6 py-2 rounded-lg"
          >
            Afficher plus
          </motion.button>
        </div>
      )}
    </section>
  );
}