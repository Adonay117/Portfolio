import React from "react";


function Skill(){
    return(
        <div class="info">
            
        <div class="about">
            <div class="title"> <h1>About </h1>
            </div>
            <div class="content-about"><marquee direction="left">
                <h2>hello world, I'm Gerson Adonay Aragón Torres, a web developer with a passion for crafting logos and vectors. Technology serves as my constant inspiration, fueling my desire to explore its boundless possibilities. </h2>
                </marquee>
            </div>
            <div class="btn-about"> <a href="source/archivo.pdf" download><button class="btn-cv" >Download cv</button></a>
        </div>
         
    </div>

        <div class="skills">
          <div class="title"> <h1>Skills</h1>
          </div> 
      
          <div class="icon-skills"><i class="fa-brands fa-js hvr-buzz"></i><i class="fa-brands fa-git hvr-buzz"></i><i class="fa-brands fa-react hvr-buzz"></i><i class="fa-solid fa-bezier-curve hvr-buzz"></i><i class="fa-brands fa-php hvr-buzz"></i>
          </div>
  
        </div>
        
      </div>
    )
};
export default Skill