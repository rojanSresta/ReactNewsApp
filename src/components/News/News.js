function News({ news }) {
  return (
    <>
      <div className="mainContainer bg-gradient-to-r from-indigo-500 to-sky-500 py-12">
        {news?.articles && (
          <div>
            <h2 className="text-center text-white text-2xl font-bold">
              Total Results: {news.totalResults}
            </h2>
            <div className="newsContainer flex flex-wrap justify-evenly">
              {news.articles.map((article, index) => (
                <div
                  className="text-white rounded-3xl border-2 flex w-[30%] my-8 p-3 h-48 bg-transparent backdrop-blur-md"
                  key={index}
                >
                  <img
                    src={
                      article.urlToImage === null
                        ? "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                        : article.urlToImage
                    }
                    alt={article.author}
                    width={150}
                    className="rounded-full mr-2 object-cover"
                  />
                  <div className="info flex flex-col">
                    <h2 className="text-lg font-bold">
                      {article.author !== null
                        ? article.author.length <= 20
                          ? article.author
                          : article.author.substring(0, 10)
                        : ""}
                    </h2>
                    <p>
                      {article.title.length <= 50
                        ? article.title
                        : article.title.substring(0, 50)}
                      ...
                    </p>
                    <button className="border-2 border-[#ff4343] bg-[#ff4343] py-1 w-28 cursor-pointer fixed left-[17rem] bottom-2 rounded-xl hover:bg-red-600">
                      <a href={article.url} target="_blank" rel="noreferrer">
                        Read More
                      </a>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default News;
