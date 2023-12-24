"use client";

import React, { useState } from 'react';
import Articles from "./articles";
import Loader from "./loader";

function Hero() {
    const [isLoading, setIsLoading] = useState(false);
    const [showArticles, setShowArticles] = useState(false);

    const handleSearch = () => {
        setShowArticles(false);
        setIsLoading(true);

    
        setTimeout(() => {
            setIsLoading(false);
            setShowArticles(true);
        }, 3000);
    };

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content text-center flex flex-col">
                <div className="max-w">
                    <h1 className="text-5xl font-bold">Seekify - Search Engine</h1>
                    <p className="py-6">Search quickly and easily across more than 45,000 articles with just one query</p>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    <button className="btn btn-primary ml-4" onClick={handleSearch}>Search</button>
                </div>
            
                {isLoading && 
                (
                    <div className='flex flex-row'>
                <Loader />
                </div>)}

            
                {showArticles && (<Articles />
                )}
            </div>
        </div>
    );
}

export default Hero;
