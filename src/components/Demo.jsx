import { linkIcon } from "../assets/index.js";
import { useEffect, useState } from "react";
import { useLazyGetSummaryQuery } from "../services/article.js";

export const Demo = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("article"),
    );
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    if (!data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            className="absolute left-0 my-2 ml-3 w-5"
            src={linkIcon}
            alt="link_icon"
          />
          <input
            required
            className="url_input peer"
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ←
          </button>
        </form>
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto"></div>
      </div>
    </section>
  );
};
export default Demo;
