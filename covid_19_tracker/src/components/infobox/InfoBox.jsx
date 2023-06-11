import React from 'react'; 
import {Typography, Card, CardContent} from '@material-ui/core';
 
const InfoBox = ({title, cases, total}) => { 
  return(
    <Card className="infobox">
        <CardContent>
            <Typography 
            className="infobox__title"
            color='textsecondry'
            
            > {title} </Typography>
            <h2 className="infobox__cases"> {cases} </h2>
            <Typography 
            className="infobox__title"
            color='textsecondry'
            
            > {total} Total </Typography>
        </CardContent>
        
    </Card>
  );
}

export default InfoBox;