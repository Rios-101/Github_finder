import './App.css';
import Nav from './components/nav/navbar.component';
import Footer from './components/footer/footer.component';
import { Routes,Route } from 'react-router-dom';
import About from './components/pages/about/about.component';
import NotFound from './components/pages/notFound/notFound.component';
import Home from './components/pages/home/home.component';
import Alart from './components/alart/alart.component';
import { useContext } from 'react';
import { AlartContext } from './components/context/alart/alart.context';
import User from './components/pages/user/user.component';




function App() {

  const {alart} = useContext(AlartContext)

  return (
    <div className="flex flex-col justify-between bg-slate-700 min-h-screen ">
      <Nav/>
      {alart ? <Alart msg={alart} /> : null}
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/:login"} element={<User/>}/>
        <Route path={"/*"} element={<NotFound/>}/>
        <Route path={"/404"} element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
