import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Error from '../img/sad.png';
const Result = ({match, data}) =>{

    const the = data.find(e => e.id === Number(match.params.sportId));
    let sportlist;

    if(the) 
       sportlist =(
           <Container>
               <Row>
                   <Col>
                    <div style={{padding: "3.5cm", backgroundColor: "#26EDF9", borderRadius: "50px", border:"2px outset #99FFFF"}}>
                <img src={the.url} alt="descr" style={{height: "200px", width: "300px", marginTop: "-120px", borderRadius: "10px"}}></img>
                <h3 style={{marginTop: "20px"}}>{the.name}</h3>
                <hr/>
                <p>{the.description}</p>
                    </div>
                   </Col>
               </Row>
           </Container>
       ) 
    else sportlist = (<div style={{padding: "3.5cm", backgroundColor: "#26EDF9", borderRadius: "50px", border:"2px outset #99FFFF"}}>
        <img src={Error} alt="error" style={{width: "100px", height: "100px", display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "-100px"}}></img>
        <br/>
        <h3 style={{textAlign: "center"}}>Error 404:</h3>
        <br/>
        <h3 style={{textAlign: "center"}}>This sport isn't in our library</h3>
        </div>
        )
    return(
        <div>{sportlist}</div>
    )
};

export default Result;