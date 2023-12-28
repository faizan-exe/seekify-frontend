"use client";

import React, { useState } from 'react';
import Articles from "./articles";
import Loader from "./loader";
import File from './file';

function Hero() {
    const [isLoading, setIsLoading] = useState(false);
    const [showArticles, setShowArticles] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        setShowArticles(false);
        setIsLoading(true);

    
        setTimeout(() => {
            setIsLoading(false);
            setShowArticles(true);
        }, 3000);
    };

    return (
        <form onSubmit={handleSearch} className="hero min-h-screen text-base-content">
            <div className="hero-content text-center flex flex-col">
                <div className="max-w">
                    <h1 className="text-5xl font-bold">Seekify - Search Engine</h1>
                    <p className="py-6">Search quickly and easily across more than 45,000 articles with just one query</p>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    <button className="btn btn-primary ml-4" type="submit">Search</button>
                </div>

                <File />
            
                {isLoading && 
                (
                    <div className='flex flex-row'>
                <Loader />
                </div>)}

            
                {showArticles && (<Articles />
                )}
            </div>
        </form>
    );
}

export default Hero;
