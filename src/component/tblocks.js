import React from 'react';
import Imga from '../img/sport1.jpg';
import Imgb from '../img/sport2.jpg';
import Imgc from '../img/sport3.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Blocks = () =>{
    return(
        <Container>
            <div style={{display: "flex", justifyContent: "stretch", width:"100%"}}>
                <Row>
                    <Col>
                        <div className="spa" style={{padding: "3.5cm", backgroundColor: "white", marginLeft: "-0.5cm", borderRadius: "50px", border:"2px outset #26EDF9"}}>
                <img src={Imga} style={{height: "200px", width: "300px", marginTop: "-120px", borderRadius: "10px"}} alt="spa"></img>
                <hr/>
                <h5>Le Chess Boxing est un savant mélange entre la boxe et les échecs. Un match se déroule en 11 rounds, 
                    entre partie d'échec et match de boxe, 
                    les rounds pairs, les participants s'affrontent sur le ring, et les rounds impaires... <br/><Link to="/Sport/1">En savoir plus</Link></h5>   
                </div>
                    </Col>
                    <Col>
                        <div id="spb" style={{padding: "3.5cm", backgroundColor: "#99FFFF", borderRadius: "50px", border:"2px outset black"}}>
                <img src={Imgb} style={{height: "200px", width: "300px", marginTop: "-120px", borderRadius: "10px"}} alt="spb"></img>
                <hr/>
                <h5>L'ultimate tazer ball, un match oppose deux équipes. Elles se composent de 4 joueurs dont un gardien. 
                    Chaque joueur est armé d'un taser, et les équipes se disputent un ballon de 60 centimètres de diamètre. 
                    Le but est alors de marquer plus de buts... <br/><Link to="/Sports/2">En savoir plus</Link></h5> 
                </div>
                    </Col>
                    <Col>
                        <div id="sbc" style={{padding: "3.5cm", backgroundColor: "#26EDF9", marginRight: "-0.5cm", borderRadius: "50px", border:"2px outset #99FFFF"}}>
                <img src={Imgc} style={{height: "200px", width: "300px", marginTop: "-120px", borderRadius: "10px"}} alt="spc"></img>
                <hr/>
                <h5>Le fierljeppen consiste à sauter au-dessus d'un canal ou d'un plan d'eau, 
                    à l'aide d'une perche de 8 à 13 mètres de long. 
                    Comme pour le saut en longueur, on mesure ensuite la distance du saut pour 
                    savoir qui remporte la compétition... <br/><Link to="/sport/3">En savoir plus</Link></h5> 
                </div> 
                    </Col>
                </Row>
            
        </div>
        </Container>
    )
}
export default Blocks;