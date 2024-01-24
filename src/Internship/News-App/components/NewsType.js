// NewsType.js
import React from 'react';

const NewsType = ({ newsType }) => {
  return (
    <div className="row my-3 mx-3" id="newsType">
      <h4>{newsType}</h4>
    </div>
  );
}

export default NewsType;
