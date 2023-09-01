import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Badge from '@mui/material/Badge'; // Use `styled` as the default import
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// Styled component-1
const Container = styled.div`
    height: 60px;
`;

// Styled component-2
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
`;
// Styled component-10
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left:25px;
`;

const Image=styled.img`
width:200px;
font-weight:bold;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{color: "gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
               {/*  <Logo>LUXE</Logo> */}
                    <Image src="/images/logo.png"/>
                   
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>LOGIN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
