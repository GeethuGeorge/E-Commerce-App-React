import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { styled } from 'styled-components';
import {mobile} from "../Responsive";


const Info=styled.div`
opacity:0;
width:100%;
height:100%;
position: absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
align-items: center;
justify-content: center;
transition:all 0.5s ease;
cursor:pointer;

`;


const Container=styled.div`
flex:1;
margin: 5px;
min-width:280px;
/* height: 500px; */
display: flex;
align-items: center;
justify-content: center;
position:relative;


&:hover ${Info}{
opacity: 1;
}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  height:75%;

`;


const Icon=styled.div`
width: 40px;
height: 40px;
border-radius:50%;
background-color:white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition:all 0.5s ease;

&:hover{
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`
const Product = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Icon><ShoppingCartOutlinedIcon/></Icon>
        <Icon><SearchOutlinedIcon/></Icon>
        <Icon><FavoriteBorderOutlinedIcon/></Icon>
      </Info>
    </Container>
  )
}

export default Product