import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {


  return (
    <>
    <nav id='navbar'>
      <h2>
        <Link to="/">MoviesLib</Link>
      </h2>
      <Link to="/movie/1">Movie</Link>
      <Link to="/search">Search</Link>
    </nav>
      <h2>Movies Lib</h2>
      <Outlet />
    </>
  )
}

export default App
