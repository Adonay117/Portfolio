import React from "react";
import './Card.css';
import CodeIcon from '@mui/icons-material/Code';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

import Button from "@mui/material/Button";
import '../../css/hover.css'




export default function Card(props){
    const skill= props.DescriptionProject
    const skills= skill.split(' ')
    //console.log(skills)
    const listSkill= skills.map((tags)=>(
        <div className={`tags-${tags}`} style={{backgroundColor: "hsl(72, 27%, 36%)", borderRadius:"20px", color: '#C1D476', display:'flex', flexFlow:"1", padding:"10px"}}><p>{tags}</p></div>
    ));
  
    
    return(
    
       
            <div className="card-project ">
               
                <div className="card-info">
                    <div className="card-image"><img src={require(`../img/project-${props.ImageProject}.jpg`)} alt="imgProject" />
                    </div>
                    <div className="card-title contentJustify"><h4>{props.TitleProject}</h4>
                    </div>
                    
                    <div className="card-description contentJustify">
                     {listSkill}
                    </div>
                    
                
                    <div className="card-link contentJustify">
                        <div className="icon-card1"><Button variant="filled" startIcon={<InsertLinkIcon/>} href={props.LinkView}>View</Button></div>
                        <div className="icon-card2"><Button variant="filled" startIcon={<CodeIcon/>} href={props.LinkCode}>Code</Button></div>
                    </div>
                </div>
                


            </div>

          


    )
}