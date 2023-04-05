import './App.css'
import Home from './assets/components/Home'
import { Outlet } from 'react-router-dom'
import Header from './assets/components/Header'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
