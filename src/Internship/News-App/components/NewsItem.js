// NewsItem.js
import React from 'react';

const NewsItem = ({ news }) => {
  // Extracting date
  const date = news.publishedAt.split("T");

  return (
    <div className="col-sm-12 col-md-4 col-lg-3 p-2 card">
      <div className="p-2">
        {/* Image */}
        <img
          height="matchparent"
          width="100%"
          src={news.urlToImage}
          alt={news.title}
        />

        <div>
          {/* News Heading */}
          <h5 className="card-title">{news.title}</h5>

          {/* Date */}
          <h6 className="text-primary">{date[0]}</h6>

          {/* Description */}
          <p className="text-muted">{news.description}</p>

          {/* Read More Link */}
          <a
            className="btn btn-dark"
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
