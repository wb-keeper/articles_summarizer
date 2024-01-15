import { linkIcon } from "../assets/index.js";
import { useState } from "react";

export const Demo = () => {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const handleSubmit = async (e) => {
    alert("Submitted");
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
      </div>
    </section>
  );
};
export default Demo;
