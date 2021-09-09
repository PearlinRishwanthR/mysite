
import './App.css';
import Profile from "./pages/profile";
import About from "./pages/aboutme";
import Education from "./pages/Education";
import Projects from "./pages/projects";
import Work from "./pages/work";
import Resume from "./pages/resume";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
   
   <Router>
    <Navbar/>
   <Switch>
          <Route path="/" exact component={Profile}/>
          <Route path="/about" component={About}/>
          <Route path="/education" component={Education}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/work" component={Work}/>
          <Route path="/resume" component={Resume}/>
          </Switch>
      
    </Router>
    <Footer/>
   </>
    
  );
}

