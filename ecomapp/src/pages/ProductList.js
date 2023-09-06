import React from "react";
import styled from "@emotion/styled";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {mobile} from "../Responsive";

const Container = styled.div``;

const Title = styled.h1`
    margin-top: 75px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option=styled.option``;

const ProductList = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>PRODUCTS</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select>
                    <Option default selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>


                    <Select>
                    <Option default selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>

                </Filter>

                <Filter>
                    <FilterText>Sort Products</FilterText>

                    <Select>
                    <Option default selected>Newest</Option>
                        <Option>Price(asc)</Option>
                        <Option>Price(desc)</Option>
                
                    </Select>

                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer/>
        </Container>
    );
};

export default ProductList;
