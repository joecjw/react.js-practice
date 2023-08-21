#create inital vite + react project
npm create vite@latest my-project -- --template react
npm install

#run project
npm run dev

## Rudux

#install redux toolkit
npm install @reduxjs/toolkit

#install complementary packages
npm install react-redux

## Axios

npm install axios

## React Router

npm install react-router-dom

## Date

npm install date-fns

## Tailwind Css

#install with vite
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

#configure template paths in 'tailwind.config.js'file
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],

#add directives to ./src/index.css file
@tailwind base;
@tailwind components;
@tailwind utilities;

## Json Server

#install
npm install -g json-server
#create data file
e.g. "db.json" in path /src/data/db.json
#start server
json-server --watch src/data/db.json -p {portNumber}
