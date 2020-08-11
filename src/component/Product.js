import React from 'react';
import Table from 'react-bootstrap/Table';


const product = [
    {
        id: 1,
        url: "https://www.goalinn.com/f/13736/137367368/nike-mercurial-superfly-vii-academy-fg-mg.jpg",
        name: "Soccer Shoes",
        price: 150
    },
    {
        id: 2,
        url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Basketball.jpeg",
        name: "Basket Ball",
        price: 10
    },
    {
        id: 3,
        url: "https://fitadium2-108c2.kxcdn.com/7825-home_default/bb-gym-bag-better-bodies.jpg",
        name: "Sport Bag",
        price: 55
    },
    {
        id: 4,
        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXR02_VW_PF+watch-44-alum-spacegray-nc-nike5s_VW_PF_WF_CO?wid=375&hei=356&trim=1,0&fmt=p-jpg&qlt=95&op_usm=0.5,0.5&.v=1583262354735,1590016237000",
        name: "Apple Watch Nike series",
        price: 1189
    },
    {
        id: 5,
        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591634795000",
        name: "Airpods Pro",
        price: 279,
    },
    {
        id: 6,
        url: "https://contents.mediadecathlon.com/p1586458/k$fcac82ee56184b9094aaed701278c2ce/sq/Lampe+frontale+de+trekking+rechargeable+TREK+500+USB+noire+200+lumens.webp?f=1000x1000",
        name: "Frontal Lamp",
        price: 27, 
    },
    {
        id: 7,
        url: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTgltiolOQYpzvIEpJtA7QGzZXBPbDtfSX-qBk5Actl9kE1TtufOpUF17PErwTo7Q&usqp=CAc",
        name: "Dumbells",
        price: 7, 
    },
    {
        id: 8,
        url: "https://contents.mediadecathlon.com/p1832107/k$df2ffc7e6748a8264eb4b474f7473828/sq/TENTE+DE+CAMPING+MH100+2+PERSONNES.webp?f=1000x1000",
        name: "Tent Quechua",
        price: 26, 
    },
    {
        id: 9,
        url: "https://contents.mediadecathlon.com/p1888596/k$26488cbaab349431021e831ca30979b2/sq/CHAUSSURE+DE+RUNNING+HOMME+ASICS+GEL+STRATUS+BLEU.webp?f=1000x1000",
        name: "Running Shoes",
        price: 110, 
    },
    {
        id: 10,
        url: "https://gopro.com/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dwf6fa2aae/product-images/Media%20Mod/Desktop/MediaMod_cam4_1768x952.jpg?sw=1768&sh=952&sm=fit",
        name: "GoPro Hero 8",
        price: 500, 
    }
]


const Product = (props) =>{
    return(
        <>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Image</th>
      <th>Name</th>
      <th>Price</th>
    </tr>
  </thead>
  {product.map((e) =>(
    <tbody key={e.id}>
        <tr>
            <td>{e.id}</td>
            <td><img src={e.url} style={{width: "100px", height: "100px"}} alt="product"></img></td>
            <td>{e.name}</td>
            <td>{e.price}€</td>
        </tr>
    </tbody>
  ))}
  
</Table>
        </>
    )
}
export default Product