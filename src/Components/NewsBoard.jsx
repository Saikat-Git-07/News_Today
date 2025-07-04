import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';

const NewsBoard = ({category}) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const apiKey = import.meta.env.VITE_API_KEY;

        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

        fetch(url).then(Response => Response.json()).then(data => setArticles(data.articles));
    }, [category])

    return (
        <div>
            <h2 className='text-center'>Latest<span className='badge bg-danger text-light'>News</span></h2>
            {articles.map((news, index) => {
                return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })
            }
        </div>
    )
}

export default NewsBoard
