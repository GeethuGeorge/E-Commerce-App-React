import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components"; // Use `styled` as the default import

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
    display:flex;
    align-items: center;
`;
// Styled component-6
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;


// Styled component-7
const SearchContainer=styled.div`
border: 0.5px solid lightgray;
display:flex;
align-items: center;
margin-left:25px;
padding:5px;
`
// Styled component-4
const Center = styled.div`
    flex: 1;
`;

// Styled component-5
const Right = styled.div`
    flex: 1;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        Input
                        <Search/>
                    </SearchContainer>
                </Left>
                <Center>Center</Center>
                <Right>Right</Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
