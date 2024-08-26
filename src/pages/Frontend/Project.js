import React, { useState } from 'react';
import { Link } from '@mui/material';
import { ReactTyped } from 'react-typed';
import { IoAdd,IoClose , IoArrowForwardSharp } from "react-icons/io5";


import {
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Box,
}
  from "@mui/material";
// import images
import aranoz from "../../images/aranoz.png";
import weatherapp from "../../images/weatherapp.png";
import clock from "../../images/clock.png";
import calculator from "../../images/calculator.png";
import tictactok from "../../images/tictactok.png";
import colorfliper from "../../images/colorfliper.png";
import snakegame from "../../images/snakegame.png";

export default function Project() {

  const text = "<span style='color: #257f2d;'>Language</span>";
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };


  const [selectedService, setSelectedService] = useState("e-commerce website ");

  const services = [
    {
      id: "e-commerce website ",
      img: aranoz,
      title: "https://aranoz-reactapp-732c32.netlify.app",
      description:
        "We built a responsive website with React.js, using its component-based structure for a smooth user experience. The design focuses on scalability and modern front-end technologies",
      list: "React.js , html , css , Bootstrap ",
    },
    {
      id: "Snake game",
      img: snakegame,
      title: "https://snake-game-wisp-5954c5.netlify.app/",
      description:
        "We developed a responsive website using JavaScript, HTML, and CSS, focusing on interactive design and seamless user experience. The project emphasizes clean code and modern web standards.",
      list: "Javascript, html , css  ",
    },
    {
      id: "Weather App",
      img: weatherapp,
      title: "https://weather-app-speculoos-ab79fd.netlify.app",
      description:
        "We developed a responsive website using JavaScript, HTML, and CSS, focusing on interactive design and seamless user experience. The project emphasizes clean code and modern web standards.",
      list: "Javascript , html , css , Bootstrap ",
    },
    {
      id: "Analog Clock",
      img: clock,
      title: "https://analogclock-sfogliatella-2c1522.netlify.app",
      description:
        "We developed a responsive website using JavaScript, HTML, and CSS, focusing on interactive design and seamless user experience. The project emphasizes clean code and modern web standards.",
      list: "Javascript , html , css , Bootstrap ",
    },
    {
      id: "Calculator",
      img: calculator,
      title: "https://calculator-mooncake-14e3b6.netlify.app",
      description:
        "We developed a responsive website using JavaScript, HTML, and CSS, focusing on interactive design and seamless user experience. The project emphasizes clean code and modern web standards.",
      list: "Javascript , html , css , Bootstrap ",
    },
    {
      id: "Tictactok Game",
      img: tictactok,
      title: "https://tictactok-seahorse-d9038c.netlify.app",
      description:
        "We developed a responsive website using JavaScript, HTML, and CSS, focusing on interactive design and seamless user experience. The project emphasizes clean code and modern web standards.",
      list: "Javascript , html , css , Bootstrap ",
    },
    {
      id: "color flipper",
      img: colorfliper,
      title: "https://color-flipper-wisp-69c170.netlify.app",
      description:
        "We developed a responsive website using JavaScript, HTML, and CSS, focusing on interactive design and seamless user experience. The project emphasizes clean code and modern web standards.",
      list: "Javascript , html , css  ",
    },
  ];

  const handleServiceClick = (id) => {
    setSelectedService(id);
  };

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <Container >
      <Typography variant="h3" align="center" color="#257F2D" fontWeight="500" fontFamily="arial" gutterBottom marginTop="30px" marginBottom="30px" >
        Our Project
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Box sx={{ bgcolor: '#f5f5f5', p: 2, marginTop: "20px", }} >
            <List>
              {services.map(service => (
                <ListItem
                  button
                  key={service.id}
                  selected={selectedService === service.id}
                  onClick={() => handleServiceClick(service.id)}
                >
                  <ListItemText primary={service.id} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>




        <Grid item xs={12} md={9}>
          <Card sx={{ display: 'inline-block', alignItems: 'center', p: 0, marginTop: '20px', boxShadow: '1px 2px 20px rgb(185, 220, 243)' }}>

            <Link href={selectedServiceData.title} target="_blank"> 
            <CardMedia
              component="img"
              sx={{ width: '100%', height: '100%', borderRadius: 0, }}
              image={selectedServiceData.img}
              alt={selectedServiceData.title}
            />  
            </Link>
           
          </Card>


          <Card sx={{ display: 'block', flexDirection: 'column', marginTop: "20px", boxShadow: ' 1px 2px 10px  #ebe6e0', }}>

            <Box>
              <CardContent>
                 <span style={{ fontSize:"22px", color:"#257f2d"}}> < IoArrowForwardSharp /> </span>
                <ReactTyped style={{ fontSize: '19px', fontWeight: "500" }}
                  strings={[
                    "Using&nbsp;" + text

                  ]}

                  typeSpeed={50}
                  deleteSpeed={50}
                  loop
                />
                <Typography component="h5" variant="h5 " fontSize="19px" color="#5b41de" display="flex" justifyContent="center" alignItems="center">
                  {selectedServiceData.list}
                </Typography>

              </CardContent>
            </Box>

          </Card>




          <Card sx={{ display: 'inline-block', flexDirection: 'column', m1: 2, marginTop: "20px", marginBottom: "20px", backgroundColor: '#c5f5fa', minWidth:"100%" }}>

            <Box>
              <CardContent>
                <Typography component="h5" variant="h5">
                  <span className='beforlink' style={{ fontSize: '20px' }}>live demo &#128073; &nbsp;  </span>
                  <Link href={selectedServiceData.title} target="_blank" fontSize={"17px"} > {selectedServiceData.title} </Link>
                  <span style={{  display:'flex', justifyContent:'center', alignItems:'center', marginTop:'9px' }}>                 
                    <button className='descBtn' onClick={handleClick}> {isVisible ? < IoClose style={{ width: "35px", height: "35px",  }} /> : < IoAdd style={{ width: "35px", height: "35px" }} />}    </button>
                  </span>
                </Typography>
                {isVisible && (

                  <Typography variant="body2" color="black" fontSize="13px" paddingTop="10px" >
                    {selectedServiceData.description}
                  </Typography>

                )}


          
              </CardContent>
            </Box>

          </Card>



        </Grid>
      </Grid>
    </Container>
  );
}
