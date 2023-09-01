import React from "react";
import styled from "@emotion/styled";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Product from "../components/Product";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;


const Title=styled.h1`
margin-top: 75px;
`;

const FilterContainer=styled.div`
display: flex;
justify-content: space-between;
`;

const Filter=styled.div`
margin: 20px;
`;


const ProductList = () => {
    return (
        <Container>
           <Announcement/>
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
              <Filter>Filter1</Filter>
              <Filter>Filter2</Filter>
              <Filter>Filter3</Filter>
              <Filter>Filter4</Filter>
            </FilterContainer>
            <Product/>
            <Newsletter/>
        </Container>
    );
};

export default ProductList;
