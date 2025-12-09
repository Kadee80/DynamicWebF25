# Typescript Google Maps Knockoff

Apologies for being sick last week, and for picking a massive topic to try and cover in one session! The `Maps_Clone_TS` folder contains a ripoff of google maps with a location search using OpenMapsApi and Map/Pins/Animations via `Leaflet.js` using a React conversion library for the classic open source js library.

To run this project:

1. `git pull` from the class repo.
2. Copy the `Maps_Clone_TS` folder to whereever you take yout notes for this class.
3. `cd  Maps_Clone_TS` and run an `npm install` to get your necessary node modules
4. This project was generated using `Vite` so to run the project `npm run dev`
5. The app will be visible at `http://localhost:5173/`
6. Enter a search term in the top left bar. The top 5 results will list below. Select a result to zoom and center the map on that location.

## Hello Typescript!

Today's lesson we are going to just jump right in and start coding. We will have a slightly different setup today to start.

1. First, we are going to generate a project with Vite today, and utilize its built in Typescript Template:
   ```bash
   npm create vite location-search -- --template react-ts
   ```
2. Now, `cd` into your new project and run the following:
   ```bash
    npm install
    npm run dev
   ```
3. You'll notice when you run your dev server, the port is totally different!
4. Now, we need to install `Tailwind.css` the `Vite` way:
   [Install Tailwind in a Vite project](https://tailwindcss.com/docs/installation/using-vite)
5. Now it's time to get our boilerplate in for our project files and off we go!
