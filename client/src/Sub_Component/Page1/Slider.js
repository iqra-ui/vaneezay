
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import React,{useState,useEffect} from 'react';


function Slider() {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsSmallScreen(mediaQuery.matches);
    const listener = () => setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addListener(listener);
    return () => mediaQuery.removeListener(listener);
  }, []);
  // const [navSize, setnavSize] = useState("4rem");
  // const [navColor, setnavColor] = useState("transparent");
  // const [textColor, setText]=useState('#fff');
  // const [topNav, setTopNav]=useState(40);
  

  // const listenScrollEvent = () => {
  //   window.scrollY > 10 ? setnavColor("#ffff") : setnavColor("transparent");
  //   window.scrollY > 10 ? setnavSize("5rem") : setnavSize("4rem");
  //   window.scrollY > 10 ? setText('#000'): setText('#fff');
  //   window.scrollY > 10 ? setTopNav(0): setTopNav(40);
    
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent);
  //   return () => {
  //     window.removeEventListener("scroll", listenScrollEvent);
  //   };
  // }, [])
  return (
    <div>
      {isSmallScreen ? (
          <img
            className="h-2/5"
            src="https://cdn.shopify.com/s/files/1/2277/5269/files/mobile_7e09503c-7462-419a-93d7-be60639cd494.jpg?v=1681366519
            "
            alt="Small image"
          />
        ) : (
          <img
            src="https://cdn.shopify.com/s/files/1/2277/5269/files/main_slider_desktop_hj_5736f65c-df74-4e39-bf17-c75d4ed9c804_1780x.jpg?v=1681366464
            "
            alt="Large image"
          />
        )}
{/* 
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
        
      
      </Card.ImgOverlay>
    </Card>  */}
  </div>
  )
}

export default Slider
