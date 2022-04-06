import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Header from './components/header'
import Newsletter from './components/newsletter'
import Footer from './components/footer'


function App() {
 
   return (
   <Router>
     <Header/>
     <Routes />
     <Newsletter/>
     <Footer/>
   </Router>
  );
  
}

export default App;
