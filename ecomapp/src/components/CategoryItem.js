import React from "react";
import { styled } from "styled-components";
import {mobile} from "../Responsive";

const Container = styled.div`
flex:1;
margin:3px;
position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({height:"50vh"})}

`;

const Info=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Title=styled.div`
color:white;
margin-bottom: 20px;
font-weight:700;
${mobile({marginLeft:"70px"})}
`;
const Button=styled.div`
border:none;
padding:10px;
background-color: white;
color:grey;
font-weight: 600;
${mobile({marginLeft:"70px"})}
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};
export default CategoryItem;
