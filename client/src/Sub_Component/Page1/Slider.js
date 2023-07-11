
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import React,{useState,useEffect} from 'react';


function Slider() {

  const [navSize, setnavSize] = useState("4rem");
  const [navColor, setnavColor] = useState("transparent");
  const [textColor, setText]=useState('#fff');
  const [topNav, setTopNav]=useState(40);
  

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#ffff") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("4rem");
    window.scrollY > 10 ? setText('#000'): setText('#fff');
    window.scrollY > 10 ? setTopNav(0): setTopNav(40);
    
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [])
  return (
    <div>

     <Card  style={{border:0}}>
       <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://aik.com.pk/cdn/shop/files/aik-atelier-wedding-festive-22-banner-2023-1.jpg?v=1686660812&width=1620"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  "
          src="https://www.bareeze.com/media/wysiwyg/Home_page_banner_formal_1600x651.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bareeze.com/media/wysiwyg/home/Home_page_banner_Shawl_1600x651.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
     </Carousel> 
     
      <Card.ImgOverlay className='p-0'>
        <Card.Title>
      {/* <nav className='fixed w-100 mx-0 ' 
       style={{
          backgroundColor: navColor,
          height: navSize,
          color: textColor,
          transition: "all 1s",
          top:topNav,
          zIndex:'2'
        }}
        >

        
        {[false].map((expand) => ( 
        <Navbar key={expand}   expand={expand} className=" p-2  mx-0" >
          <Container fluid  >
          <p className='text-base mt-3 ml-5 mr-3'>MENU</p>
            <Navbar.Toggle
           aria-controls={`offcanvasNavbar-expand-${expand}`} 
           className="focus:shadow-none hover:shadow-none text-black border-0"/>
        
            <Navbar.Brand href="#"  className='mt-0 mx-auto p-0' >
              <img  src="https://vaneezay.com/wp-content/uploads/2022/11/logo2.png" width="100px" height="80px"/>
            </Navbar.Brand>
      
           <h5 className='hover:scale-125'><AiFillHeart/></h5>

            <div  className='hover:scale-125 ml-5'>
              <h5><AiOutlineShoppingCart/></h5>
            </div>

            <div  className='hover:scale-125 ml-5'>
              <h6><FaFacebookF/></h6>
            </div>

            <div  className='hover:scale-125 ml-5'>
              <h5><AiOutlineInstagram/></h5>
            </div>

           

           
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header   closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                
                 </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body className='bg-dark text-white'>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <Link to="/" >HOME</Link>
                  <Link to="cotri">COTRI</Link>
                  <Link to="dhannak">DHANAK</Link>
                  <Link to="khaddar">KHADDAR</Link>
                  <Link to="kotail">KOTAIL</Link>
                  <Link to="kurti">KURTI</Link>
                  <Link to="lawn">Lawn_Vol1</Link>
                  <Link to="contact">CONTACT US</Link>
               
                </Nav>
              
              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          
          </Container>
      
        </Navbar>
       
      ))}
      </nav> */}
      {/* <Outlet/> */}
   

        </Card.Title>
      
      </Card.ImgOverlay>
    </Card> 
  </div>
  )
}

export default Slider
