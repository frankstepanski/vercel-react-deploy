/*

    https://vitejs.dev/guide/env-and-mode#env-files

   .env file is used to store environment variables.

   Vite uses dotenv to load additional environment variables from the following files 
   in your environment directory. The .env.local file is loaded for all environments, 
   and ignored by Git.

   Only variables prefixed with VITE_ are exposed to your Vite-processed code.

   Adding your secret key to the .env file doesn't prevent your key from
   being public in production. Environment variables are embedded into the build, 
   meaning anyone can view them by inspecting your app's files. 
   
   To use the TMDB API, you need to sign up for an account and get an API key.
   https://developer.themoviedb.org/docs/getting-started

   Store the API key in a .env.local file in the root of your project.
   VITE_API_KEY=your_api_key

*/

const API_KEY = import.meta.env.VITE_API_KEY; 

async function getAllMovies (URL) {

    try {
       const response = await fetch(URL);
       const data = await response.json();
       return data;

    }  catch (error) {
       console.log(error);
    }
}

async function getNowPlaying () {

  try {
     const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
     const data = await response.json();
     return data;

  }  catch (error) {
     console.log(error);
  }
}
 
async function postReview (data) {

    try {
       const response = await fetch(this.url, {
       method: 'POST',
       headers: {
          'Content-Type': 'application/json'
       },
        body: JSON.stringify(data)
      });
      const dataResponse = await response.json();
      return dataResponse;

    } catch (error) {
      console.log(error);
      return null;
    }
}

export { getAllMovies, getNowPlaying, postReview };