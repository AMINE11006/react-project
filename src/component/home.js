import React from 'react';
import Imga from '../img/sport1.jpg';
import Test from '../img/test.jpg';
import Imgc from '../img/sport3.jpg';
import Blocks from './tblocks';
import Carousel from 'react-bootstrap/Carousel';

const Home = () =>{
    return(
        <div>
<Carousel style={{margin: "0"}}>
  <Carousel.Item>
    <img style={{height: "650px", width: "100%"}} src={Imga} alt="First slide" />
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: "650px", width: "100%"}} src={Test} alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: "650px", width: "100%"}} src={Imgc} alt="Third slide" />
  </Carousel.Item>
</Carousel>
        <Blocks/>
        </div>
    )
}
export default Home;