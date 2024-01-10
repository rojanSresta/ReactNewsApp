import { useState, useEffect } from "react";
import News from "../News/News";

const Fetch = ({ tag }) => {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const day = d.getDate() - 1;
        const date = `${year}-${month}-${day}`;

        const apiKey = `https://newsapi.org/v2/everything?q=${tag}&from=${date}&sortBy=popularity&apiKey={apiKey}`;
        console.log(apiKey);

        const response = await fetch(apiKey);
        const data = await response.json();
        setNews(data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data:", error);
      }
    };

    fetchData();
  }, [tag]);

  if (loading)
    return (
      <div className="load w-full flex justify-center">
        <img src="/images/loading.gif" alt="Loading..." />
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <>
      <News news={news} />
    </>
  );
};

export default Fetch;
