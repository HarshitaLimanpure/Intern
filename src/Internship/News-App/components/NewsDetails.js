// NewsDetails.js
import React from 'react';
import NewsItem from './NewsItem';

const NewsDetails = ({ newsDataArr }) => {
  return (
    <div className="row me-2 ms-2" id="newsdetails">
      {newsDataArr.length === 0 ? (
        <h5>No data found.</h5>
      ) : (
        newsDataArr.map((news, index) => (
          <NewsItem key={index} news={news} />
        ))
      )}
    </div>
  );
}

export default NewsDetails;
