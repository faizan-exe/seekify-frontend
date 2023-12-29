import React from 'react';

function Articles({ articles }) {
  // If there are no articles, display "No match found"
  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-4">
        <p>No match found</p>
      </div>
    );
  }

  // Render articles if they exist
  return (
    <div className="flex mt-7 flex-col w-[55vh] border-opacity-50">
      {articles.map((article, index) => (
        <React.Fragment key={index}>
          <div className="divider"></div>
          <div className="grid h-30 px-2 card bg-base-300 rounded-box place-items-center">
            {/* Access the title of the article directly */}
            {article.t}
            <br />
            <a href={article.u} target='_blank'>{article.u} </a>
            <br />
            Author: {article.a}
            <br />
            Source: {article.s}

          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Articles;
