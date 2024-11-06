import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MovieSearchApp from './Components/Movie_Search_APP/Movie_Serach_App.jsx'
import MovieApp from './Components/Movie_Search_APP/Movie_Serach_App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  />
   {/* <MovieApp/> */}
  </React.StrictMode>,
)
