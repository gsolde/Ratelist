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

Ratelist allows you to search songs in Spotify API and rate them. Built in a week.
More features will be added soon. Stay tuned! 

## Tech stack

The app is built in React on the front-end, and the back-end is powered by Node.js, Express.js, Sequelize and PostgreSQL. Authorisation is implemented with Passport.js.

## Run the app

- **1. Get a Client ID and a Client Secret from Spotify**

   First of all we will need a Client ID and a Client Secret from Spotify if we want to be able to use their API.
   We will need a Spotify account to create an app on their developer's site, but the process is pretty straightforward          and it will not take more than 5 minutes.

   You can follow this tutorial: https://developer.spotify.com/documentation/general/guides/app-settings/#register-your-app

- **2. Create a database named 'ratelist' from the postgreSQL shell. **
- **3. Fork and clone the repository.**
- **4. Run "npm install" in /ratelist (root).**
- **5. Run "npm start" in /ratelist (root).**
- **6. Run "nodemon" in /server.**








