import { useState, useEffect } from 'react'
import './Newarea.css'
import Newscard from "../Newscard/Newscard";

const Newarea = ({ category }) => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY
      }`;
    fetch(url)
      .then(response => response.json())
      .then(data => setNews(data.articles));
  }, [category]);

  return (
    <div>
      <h2 className='mg text-center'>
        <span className='badge bg-danger'>Latest News</span>
      </h2>
      <div className="news-card-area">
        {
          news.map((newsArticle, index) => {
            return (
              <Newscard
                key={index}
                title={newsArticle.title}
                description={newsArticle.description}
                url={newsArticle.url}
                src={newsArticle.src}
                publish={newsArticle.publishedAt}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Newarea;