## Create inital vite + react project
`npm create vite@latest my-project -- --template react`  
`npm install`

## Run project
`npm run dev`

## Rudux

### Install redux toolkit
`npm install @reduxjs/toolkit`

### Install complementary packages
`npm install react-redux`

## Axios

`npm install axios`

## React Router

`npm install react-router-dom`

## Date

`npm install date-fns`

## Tailwind Css

### Install with vite
`npm install -D tailwindcss postcss autoprefixer`  
`npx tailwindcss init -p`

### Configure template paths in 'tailwind.config.js'file
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],

### Add directives to ./src/index.css file
`@tailwind base;`  
`@tailwind components;`  
`@tailwind utilities;`  

## Json Server

#### Install
`npm install -g json-server` 
#### Create data file
e.g. "db.json" in path /src/data/db.json 
#### Start server
json-server --watch src/data/db.json -p {portNumber}
