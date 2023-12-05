import './css/App.css';
import './css/hover.css'
import Skill from './components/Skill';
import Project from './components/Project'
import Services from './components/Services'
import Header from './components/Header'







function App() {

  /*var cursor2 = document.querySelector(".cursor2");
  var header = document.querySelector(".header");
  
  
  document.querySelector(".icons-network").addEventListener("mouseover", function () {
    header.classList.add("icons-hovered");
  });
  
  document.querySelector(".icons-network").addEventListener("mouseout", function () {
    header.classList.remove("icons-hovered");
  });
  
  
  
  
  document.addEventListener("mousemove", function (e) {
    cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  });*/

  return (
    <div className="App">
    <Header/>
    <Services/>
    <Skill/>
    <Project/>
   


      

    </div>
  );
}

export default App;
