import Header from './components/Header/Header';
import Home  from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import './App.css'


function App() {

  return (
    <div className="container">
      <Header />
      {/* <Home/> */}
      <Menu />
    </div>
  )
}

export default App
