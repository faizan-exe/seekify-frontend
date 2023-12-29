import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { query } = await req.json();
    console.log("query", query);

    let articles = []; // Initialize articles array

    // First, fetch the search results
    const searchResponse = await fetch('http://localhost:3001/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: query }), // Send the search query in the request body
    });

    if (searchResponse.ok) {
      const searchResults = await searchResponse.json();

      // Then, use the search results to fetch the display data
      const displayResponse = await fetch('http://localhost:3001/display', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ docs: searchResults }), // Send the search results in the request body
      });

      
      if (displayResponse.ok) {
        articles = await displayResponse.json(); // Set the articles to the response from the display endpoint
      } else {
        console.error('Failed to fetch display results');
      }
    } else {
      console.error('Failed to fetch search results');
    }

    // Return the articles in the response
    return NextResponse.json({
      data: articles
    });

  } catch (error) {
    console.error("Error in POST", error);
    // Return an error response
    return NextResponse.json({ error: 'An error occurred' });
  }
}
