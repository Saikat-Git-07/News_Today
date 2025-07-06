import image from '../assets/news.jpg';
import './Newsitem.css'; // Import the CSS

const Newsitem = ({ title, description, src, url }) => {
  return (
    <div className="card news-card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 ">
      <img src={src ? src : image}
        className="card-img-top news-img"
        alt="news"
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 70) : "Catch up on breaking international headlines, trending topics, and current affairs from across the globe."}
        </p>
        <a href={url} target="_blank" className="btn btn-primary news-btn">
          Read More...
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
