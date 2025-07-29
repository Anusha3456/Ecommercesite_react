
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Shop from './pages/Shop'
import Categories from './pages/Categories'
import Contact from './pages/Contact'
import Cartpage from './pages/Cartpage'
import LoginPage from './pages/LoginPage'
import Signuppage from './pages/Signuppage'
import Mensshirts from './pages/Mensshirts'
import Womendresses from './pages/Womendresses'
import Electronics from './pages/Electronics'
import Furniture from './pages/Furniture'
import Beauty from './pages/Beauty'
import Fragrence from './pages/Fragrence'
import Productdetailspage from './pages/Productdetailspage'




function App() {
  return (
    <>
<Navbar/>
    <Routes>
     <Route  path='/' element={<Homepage/>}/>
     <Route  path='/Shop' element={<Shop/>}/>
     <Route  path='/Categories' element={<Categories/>}/>
     <Route  path='/Contact' element={<Contact/>}/>
     <Route  path='/Cartpage' element={<Cartpage/>}/>
     <Route  path='/Loginpage' element={<LoginPage/>}/>
     <Route  path='/Signuppage' element={<Signuppage/>}/>
     <Route  path='/mensshirts' element={<Mensshirts/>}/>
     <Route  path='/womensdresses' element={<Womendresses/>}/>
     <Route  path='/electronics' element={<Electronics/>}/>
     <Route  path='/furniture' element={<Furniture/>}/>
     <Route  path='/beauty' element={<Beauty/>}/>
     <Route  path='/fragrence' element={<Fragrence/>}/>
     <Route  path='/mensshirts/:id' element={<Productdetailspage/>}/>
     <Route  path='/womensdresses/:id' element={<Productdetailspage/>}/>
     <Route  path='/electronics/:id' element={<Productdetailspage/>}/>
     <Route  path='/furniture/:id' element={<Productdetailspage/>}/>
     <Route  path='/beauty/:id' element={<Productdetailspage/>}/>
     <Route  path='/fragrence/:id' element={<Productdetailspage/>}/>
     <Route path="*" element={<h1>404 Not Found</h1>} />
  </Routes>
<Footer/>
    </>
  )
}

export default App
