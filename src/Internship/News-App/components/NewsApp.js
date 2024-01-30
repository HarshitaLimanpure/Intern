// App.js
import React, { useState, useEffect } from 'react';
import Navbar from './Nav';
import NewsType from './NewsType';
import NewsDetails from './NewsDetails';
import NewsItem from './NewsItem';

const NewsApp = () => {
  // State variables
  const [newsType, setNewsType] = useState('Headlines');
  const [newsDataArr, setNewsDataArr] = useState([]);
  const [newsQuery, setNewsQuery] = useState('');

  // Functions to fetch news data
  var fetchHeadlines = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=d306689314d947369666fa221efc9554`);
    handleFetchResponse(response);
  };

  const fetchGeneralNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=d306689314d947369666fa221efc9554`);
    handleFetchResponse(response);
  };

  const fetchBusinessNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d306689314d947369666fa221efc9554`);
    handleFetchResponse(response);
  };

  const fetchSportsNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=d306689314d947369666fa221efc9554`);
    handleFetchResponse(response);
  };

  const fetchEntertainmentNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=d306689314d947369666fa221efc9554`);
    handleFetchResponse(response);
  };

  const fetchTechnologyNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=d306689314d947369666fa221efc9554`);
    handleFetchResponse(response);
  };

  var fetchQueryNews = async () => {
    if (!newsQuery || newsQuery.trim() === '') {
      // Handle empty search query
      return;
    }

    var response = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(newsQuery)}&apiKey=d306689314d947369666fa221efc9554`);
    handleFetchResponse(response);
  };

  var handleFetchResponse = async (response) => {
    if (response.status >= 200 && response.status < 300) {
      const myJson = await response.json();
      setNewsDataArr(myJson.articles);
    } else {
      // Handle errors
      console.log(response.status, response.statusText);
      setNewsDataArr([]);
    }
  };

  // useEffect to fetch headlines on component mount
  useEffect(() => {
    fetchHeadlines();
  }, []);

  // Event handlers
  const handleGeneralClick = () => {
    setNewsType('General');
    fetchGeneralNews();
  };

  const handleBusinessClick = () => {
    setNewsType('Business');
    fetchBusinessNews();
  };

  const handleSportsClick = () => {
    setNewsType('Sports');
    fetchSportsNews();
  };

  const handleEntertainmentClick = () => {
    setNewsType('Entertainment');
    fetchEntertainmentNews();
  };

  const handleTechnologyClick = () => {
    setNewsType('Technology');
    fetchTechnologyNews();
  };

  const handleSearchClick = () => {
    fetchQueryNews();
  };

  return (
    <div className="container-fluid">
      <Navbar
        onGeneralClick={handleGeneralClick}
        onBusinessClick={handleBusinessClick}
        onSportsClick={handleSportsClick}
        onEntertainmentClick={handleEntertainmentClick}
        onTechnologyClick={handleTechnologyClick}
        onSearchClick={handleSearchClick}
      />

      <NewsType newsType={newsType} />

      <NewsDetails newsDataArr={newsDataArr}>
        {newsDataArr.map((news, index) => (
          <NewsItem key={index} news={news} />
        ))}
      </NewsDetails>
    </div>
  );
};

export default NewsApp;
