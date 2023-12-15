import React from "react";
import './About.css';
import '../../css/hover.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import model from '../img/perfil.svg'
import EmailIcon from '@mui/icons-material/Email';

import Title from '../title/Title';


import { styled } from '@mui/system';
import Chip from '@mui/material/Chip';

const StyledChip = styled(Chip)({
    color: '#C1D476',
    borderColor:'#C1D476',
    margin:'10px 10px 10px 10px',
    
  });


function About(){
    return(
        <div className="container-about">
            <div className='About'>
                    <Title
                    title="ABOUT"
             />

  
            <div className="content-about">
                 <div className="perfil">
                    <img src={model} alt="perfil"/>
                 </div>
       
                <div className='Content-about-info'>
                    <div className="paragraph-about"><p>Hello world, I'm <strong>Gerson Adonay Aragón Torres</strong>, a web
                    developer with a passion for crafting logos and vectors.
                    Technology serves as my constant inspiration, 
                    fueling my desire to explore its 
                    boundless possibilities.</p>
                    </div>
              

                    <div className="icons-network">
                        <div className="git-icons hvr-grow"><a href="https://github.com/"  target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
                        </div>
                        <div className="linkedIn hvr-grow"><a href="https://www.linkedin.com/in/adonay-aragón05/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
                        </div> 
                        <div className="mail hvr-grow"><a href="mailto:adonayaragon2000@gmail.com?subject=&body=" target="_blank" rel="noopener noreferrer"><EmailIcon/></a>
                        </div>  
                    </div>
            </div>
        </div>
        <div className="skills">
                    <h3>Skills</h3>
                
        <div className="skill-about">
        
        <StyledChip label="Js"  />
        <StyledChip label="React"   />
        <StyledChip label="Mysql"   />
        <StyledChip label="Adobe Illustrator"   />
       
       
        </div>
        </div>


     

     </div>
        </div>


    )

}
export default About