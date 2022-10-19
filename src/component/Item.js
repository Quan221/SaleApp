import React from 'react';
import profile from '../image/v_ng_20.png';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Container = styled(animated.div)`
margin: 30px;
background: #C7D2FE66;
border-radius: 10px;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;
width: 257px;
height: 431px;
`;

const StyledImg = styled.img`
    width: 230px;
    height: 155 ;
   
    border-radius: 5%;
    padding-left: 0%;
    margin: 10px;
`;



const StyledH3 = styled.h3`
    line-heright: 1.5;
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 20px;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 100, (x - window.innerWidth / 2) / 100, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Item = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return (
        <>
        
        <Container
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            
            <StyledImg src={profile} />
           
            <h1  className='h1-item'>Iphone aaaaaaaa </h1>
            
            <StyledH3>Data Scientist, Designer <br/> and Full Stack Developer</StyledH3>
            <Form >
                        
                        <Button variant="success" type="submit" >
                        <Link to='/detail' className="nav-link" >Order</Link>
                        </Button>
                   
            </Form>
            
        </Container>
        
        </>
    );
}

export default Item;