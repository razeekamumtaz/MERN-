
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Add from './components/Add'
import View from './components/View'

function App() {


  return (
    <>
      <div>
        <Nav></Nav><br/><br/><br/><br/><br/>
        <Routes>
          <Route path="/add" element={<Add></Add>}></Route>
          <Route path="/view" element={<View></View>}></Route>
        </Routes>
      </div>
      
    </>
  )
}

export default App
