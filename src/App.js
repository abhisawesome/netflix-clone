
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "./components/Header";
import UserGrid from "./components/User-Grid";
import Home from './components/Home';

const App = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<UserGrid />}/>
          <Route exact path='/browse' element={<Home />}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App;
