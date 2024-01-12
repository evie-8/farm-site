import './App.css';
import Footer from './components/footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Suspense, lazy } from 'react';

import Loader from './loader/loader';

const LazyHome = lazy(() => import ( './pages/home'))
const LazyAbout = lazy(() => import('./pages/AboutUs'))
const LazyBlog = lazy(() => import('./pages/Blog'))
const LazyTeam = lazy(() => import('./pages/Team'))
const LazyPrice = lazy(() => import('./pages/Pricing'))
const LazyProduct  = lazy(() => import('./pages/ProductsPage'))

function App() {
  return (
  
        <>
        <Router>
       
        
            <Suspense fallback={<Loader/>}>
            

            <Routes>
            <Route path='/' index element={<LazyHome/>}/>
            <Route path='/about-us' element={<LazyAbout/>}/>
            <Route path='/blog' element={<LazyBlog/>}/>

            <Route path='/team' element={<LazyTeam/>}/>

            <Route path='/pricing' element={<LazyPrice/>}/>

            <Route path='/products' element={<LazyProduct/>}/>


            </Routes>
            <Footer/>
            </Suspense>
  
        </Router>
        </>
  )
}

export default App;
