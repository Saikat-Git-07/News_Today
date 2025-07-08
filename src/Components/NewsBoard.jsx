import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';

const NewsBoard = ({ category }) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const apiKey = import.meta.env.VITE_API_KEY;
        // Set default query if no category is selected
        const defaultQuery = "latest news";
        const query = category ? category : defaultQuery;

        const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=en&apiKey=${apiKey}`;

        fetch(url).then(Response => Response.json()).then(data => setArticles(data.articles));
    }, [category])

    return (
        <div>
            <h2 className="text-center fw-bold fs-2 mt-4 text-secondary">
                Uncover the Truth:{' '}
                <span className="badge bg-danger text-uppercase fs-2 px-3 py-2">
                    Today’s Top Headlines
                </span>
            </h2>

            {articles.map((news, index) => {
                return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })
            }
        </div>
    )
}

export default NewsBoard
