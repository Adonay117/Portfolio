import './css/App.css';
import './css/hover.css';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Card from './components/CardProject/Card';
import Title from './components/title/Title';

import { BrowserRouter as Router } from 'react-router-dom';
import { Element } from 'react-scroll';

function App() {


  return (
<Router>
    <div className="App">
   <Nav/>
     
    
      <Element name="about" className='sections'>
      <div className="about" id='#about'>
      
      <About/>
      </div>
      </Element>
      <Element name="work" className='container-card sections'>
        <Title  id='project'
         title='WORK'/>
       <div className='cardProjects'>
       <Card 
          ImageProject='score'
          TitleProject='Design Score'
          DescriptionProject='React Json'
          tag1='React'
          tag2='Js'
          LinkView='https://score-nu.vercel.app/'
          LinkCode='https://github.com/Adonay117/score'
        />
        <Card 
          ImageProject='portfolio'
          TitleProject='Portfolio Web'
          DescriptionProject='React'
         
          LinkView='https://adonayaragon.vercel.app/'
          LinkCode='https://github.com/Adonay117/portfolio'
        />
       
       </div>
       
      
      
   
      
        </Element> 
{/*      
     <Element name='design' className='container-design sections'>
      
        <Title
        title='DESIGN'
      
         />

        <Design/>
      
    </Element>   */}


  </div>
</Router>
  );
}

export default App;
