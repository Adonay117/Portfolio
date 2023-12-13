import './css/App.css';
import './css/hover.css';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Card from './components/CardProject/Card';
import Title from './components/title/Title';
import Design from './components/desing/Desing'
import { BrowserRouter as Router } from 'react-router-dom';
import { Element } from 'react-scroll';

function App() {


  return (
    <Router>
    <div className="App">
     <Nav/>
    
     <Element name="about">
     <div className="about" id='#about'>
      
      <About/>
      </div>
    </Element>

    <Element name="project">
    <Title  id='project'
      title='PORTFOLIO'
      
      />
    
      <div className="container-card">
  
       <Card
      ImageProject='score'
      TitleProject='Design Score'
      DescriptionProject='It is a frontend mentor challenge where you can use CSS and HTML. In my case, I decided to add JSX and extract the data with a JSON file. '
      tag1='React'
      tag2='Js'
      LinkView='https://score-nu.vercel.app/'
      LinkCode='https://github.com/Adonay117/score'
      
      
      
      />
          <Card
      ImageProject='portfolio'
      TitleProject=' Portfolio Web'
      DescriptionProject='Creation of my portfolio where I provide my information as I project it '
      tag1='React'
      tag2='Js'
      LinkView='https://adonayaragon.vercel.app/'
      LinkCode='https://github.com/Adonay117/Portfolio'
      
      
      
      />

    


      </div>
      
    </Element>
      
     

    <Element name='design'>
      
    <Title
      title='DESIGN'
      
      />

   <div className='containerDesing'><Design/></div>

    


    
    </Element>
    </div>
    </Router>
  );
}

export default App;
