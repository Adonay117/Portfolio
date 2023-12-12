import React from "react";
import './Card.css';
import CodeIcon from '@mui/icons-material/Code';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { styled } from '@mui/system';
import Chip from '@mui/material/Chip';
import Button from "@mui/material/Button";
import '../../css/hover.css'



const StyledChip = styled(Chip)({
    
    margin:'10px 10px 10px 10px',
    
  
  });
export default function Card(props){
    return(
    
             // Estructura de mi card project
            <div className="card-project hvr-grow-shadow">
                <div className="card-image"><img src={require(`../img/project-${props.ImageProject}.jpg`)} alt="imgProject" />
                </div>
                <div className="card-info">
                    <div className="card-title"><h4>{props.TitleProject}</h4>
                    </div>
                    <div className="card-description"><p>{props.DescriptionProject}
                     </p>
                    </div>


                    <div className="card-tag">
                        <StyledChip label={props.tag1}  />
                        <StyledChip label={props.tag2}  />
                       
                    </div>
                
                    <div className="card-link">
                        <div className="icon-card1"><Button variant="filled" startIcon={<InsertLinkIcon/>} href={props.LinkView}>View</Button></div>
                        <div className="icon-card2"><Button variant="filled" startIcon={<CodeIcon/>} href={props.LinkCode}>Code</Button></div>
                    </div>
                </div>
                


            </div>





    )
}