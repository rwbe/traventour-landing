import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element=<Homepage /> />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
