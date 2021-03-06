# Ratelist

<div>
  <div align='center'>
    <img src="client/src/assets/login.png" width=850 alt="login">
  </div>
  <div align='center'>
    <img src="client/src/assets/rating_selection.png" width=280 height=450 alt="rating selection">
    <img src="client/src/assets/rated_song.png" width=280 height=450 alt="rated song">
    <img src="client/src/assets/rated_songs_list.png" width=280 height=450 alt="rated songs list">
  </div>
</div>

## What is Ratelist?

Ratelist allows you to search songs in Spotify API and rate them.
More features will be added soon. Stay tuned! 

## Tech stack

- Front-end: React
- Back-end: Node.js, Express.js, Sequelize and PostgreSQL. Authorisation implemented with Passport.js.

## Run the app

<details>
  
<summary>Instructions</summary>
 
- **1. Get a Client ID and a Client Secret from Spotify**

   First of all we will need a Client ID and a Client Secret from Spotify if we want to be able to use their API.
   We will need a Spotify account to create an app on their developer's site, but the process is pretty straightforward          and it will not take more than 5 minutes.

   You can follow this tutorial: https://developer.spotify.com/documentation/general/guides/app-settings/#register-your-app

- **2. Create a database named 'ratelist' from the postgreSQL shell.**
- **3. Fork and clone the repository.**
- **4. Create a .env file in /server providing the information needed.**
    
    ```txt
    SPOTIFY_CLIENT_ID = 'copy client id here'
    SPOTIFY_CLIENT_SECRET = 'copy client secret here'
    SPOTIFY_REDIRECT_URI = 'http://localhost:3001/callback'

    PSQL_USER = 'user name' 
    PSQL_PASSWORD = 'password'

    PORT = 'port'
    ```
- **5. Run "npm install" in /ratelist (root).**
- **6. Run "nodemon" in /server.**
- **7. Run "npm start" in /ratelist (root).**

</details>

## Observations

- **To be improved**

    - Make the app responsive.
    - Rethink the UI.
    - Redirection process after successful spotify login needs to be polished. User information is passed in the url.
    
- **Future features**
  
    - Implement testing.
    - Rated songs filtering and spotify playlist creation based on track selection.
    - Soulmate algorithm implementation.
    - Automatic playlist creation based on soulmate preferences.
    - Rating stats & graphics in a dashboard with genre information vs rating, etc.
