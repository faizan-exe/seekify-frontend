'use client';

import React, { useState } from 'react';
import Articles from "./articles"; // Ensure this path is correct
import Loader from "./loader"; // Ensure this path is correct
import File from './file'; // Ensure this path is correct

function Hero() {
    const [isLoading, setIsLoading] = useState(false);
    const [searchPerformed, setSearchPerformed] = useState(false); // Track if a search has been performed
    const [searchQuery, setSearchQuery] = useState('');
    const [articles, setArticles] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSearchPerformed(true); // Indicate that a search has been performed

        try {
            const response = await fetch('/api/searchArticles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: searchQuery }),
            });

            if (response.ok) {
                const data = await response.json();
                setArticles(data.data.articles);
            } else {
                console.error('Failed to fetch search results');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
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

                {isLoading && (
                    <div className='flex flex-row'>
                        <Loader />
                    </div>
                )}

                {!isLoading && searchPerformed && (
                    <Articles articles={articles} />
                )}
            </div>
        </form>
    );
}

export default Hero;
