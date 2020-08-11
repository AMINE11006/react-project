import React from 'react';
import Result from './sports';
import {Link, Route} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Data from './sport.json';

const Sport = ({match}) =>{
    const list = Data.map(spo =>{
        return(
        <ListGroup.Item key={spo.id} style={{width: "50%"}}><Link to={`${match.url}/${spo.id}`} style={{textDecoration: "none", color: "black"}}><h3 style={{textAlign: "center"}}>{spo.name}</h3></Link></ListGroup.Item>
        )
    });
    return(
        <>
        <Container>
            <Row>
                <Col>
                <h1 style={{textAlign: "center"}}>Sport Insolite</h1>
            <ListGroup style={{marginTop: "50px", marginLeft: "370px"}}>
            {list}
            </ListGroup>
            <br/>
            <Route exact path={`${match.url}/:sportId`} render={props => <Result data={Data}{...props}/>}/>
                </Col>
            </Row>
        </Container>
        </>
        
    )
}
export default Sport;