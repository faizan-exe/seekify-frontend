import { NextResponse } from "next/server";


export async function POST(req, res) {
    try {
      const { query } = await req.json();
      console.log("query", query);
  
      // Dummy API response data (replace this with your dummy data)

      // add the api

    //   try {
    //     const response = await fetch('/api/searchArticles', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ query: query }), // Send the search query in the request body
    //     });
  
    //     if (response.ok) {
    //       const dummyData = await response.json();
    //       // Handle the response data (e.g., set it in state)
    //       // For example, if the response contains search results:
    //     } else {
    //       console.error('Failed to fetch search results');
    //     }
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }


      const dummyData = {
        articles: [
          { id: 1, title: 'Article 1', content: 'Content for Article 1' },
          { id: 2, title: 'Article 2', content: 'Content for Article 2' },
          { id: 3, title: 'Article 3', content: 'Content for Article 3' },
        ],
      };
  
      // Simulate a delay to mimic an actual API call
    
        return NextResponse.json({
            data: dummyData
          });
    
    } catch (error) {
      console.error("Error in POST", error);
    //   res.status(500).json({ error: 'An error occurred' });
    }
  }
  