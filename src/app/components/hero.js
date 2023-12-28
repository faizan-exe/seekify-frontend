"use client";

import React, { useState } from 'react';
import Articles from "./articles";
import Loader from "./loader";
import File from './file';

function Hero() {
    const [isLoading, setIsLoading] = useState(false);
    const [showArticles, setShowArticles] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [articles, setArticles] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        setShowArticles(false);
        setIsLoading(true);


     try {
            const response = await fetch('/api/searchArticles', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ query: searchQuery }), // Send the search query in the request body
            });
      
            if (response.ok) {
              const data = await response.json();
              // Handle the response data (e.g., set it in state)
              // For example, if the response contains search results:
              setArticles(data.data.articles);
            } else {
              console.error('Failed to fetch search results');
            }
          } catch (error) {
            console.error('Error:', error);
          } finally {
            setIsLoading(false);
            setShowArticles(true);
          }
        };
      

    return (
        <form onSubmit={handleSearch} className="hero min-h-screen text-base-content">
            <div className="hero-content text-center flex flex-col">
                <div className="max-w">
                    <h1 className="text-5xl font-bold">Seekify - Search Engine</h1>
                    <p className="py-6">Search quickly and easily across more than 45,000 articles with just one query</p>
                    <input type="text" value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} placeholder="name, places, etc.." className="input input-bordered input-primary w-full max-w-xs" />
                    <button className="btn btn-primary ml-4" type="submit">Search</button>
                </div>

                <File />

                {isLoading &&
                    (
                        <div className='flex flex-row'>
                            <Loader />
                        </div>)}


                {articles && (<Articles articles={articles} />
                )}
            </div>
        </form>
    );
}

export default Hero;
