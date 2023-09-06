import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Badge from '@mui/material/Badge'; // Use `styled` as the default import
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../Responsive";
import { Link } from "react-router-dom";


// Styled component-1
const Container = styled.div`
    height: 60px;
    ${mobile({height:"50px"})}
`;

// Styled component-2
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding:"10px 0px"})}
`;

// Styled component-3
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
// Styled component-6
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`;

// Styled component-7
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

//styled component-8
const Input = styled.input`
    border: none;
    ${mobile({width:"50px"})}
`;
//styled component-9
/* const Logo = styled.h1`
    font-weight: bold;
    font-size:60px;
`; */

// Styled component-4
const Center = styled.div`
    flex: 1;
    text-align: center;
`;

// Styled component-5
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex:3, justifyContent: "center" })}
`;
// Styled component-10
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left:25px;
    ${mobile({ fontSize:"12px", marginLeft:"10px" })}
`;

const Image=styled.img`
width:200px;
font-weight:bold;
`;
const StyledLink = styled(Link)`
  text-decoration: none; /* Remove text decoration (underline) */
  /* Optionally, you can add other styles like color, hover effects, etc. */
  color: gray; /* Change link color */
  
  /* Add a hover effect to change the color when hovering over the link */
  &:hover {
    color: #0056b3; /* Change link color on hover */
    font-size:medium ;
    font-family:25px;
  }
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{color: "gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
               {/*  <Logo>LUXE</Logo> */}
                    <Image src="/images/logo.png"/>
                   
                </Center>
                <Right>
                <StyledLink to="/"><MenuItem>HOME</MenuItem></StyledLink>
                   <StyledLink to="/register"><MenuItem>REGISTER</MenuItem></StyledLink>
                   <StyledLink to="/login"><MenuItem>LOGIN</MenuItem></StyledLink>
                   <StyledLink to="/cart">
                    <MenuItem>
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </MenuItem>
                    </StyledLink>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
