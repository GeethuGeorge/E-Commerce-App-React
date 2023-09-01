import React from "react";
import styled from "@emotion/styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';


const Container = styled.div`
display :flex;
`;


const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
    margin-top:10px;
`;

const Title = styled.h3`
margin-bottom:30px;
margin-top:50px;
`;

const List = styled.ul`
margin: 0;
padding : 0;
list-style: none;
display: flex;
flex-wrap: wrap;

`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
cursor: pointer;
`;

const Image = styled.img`
    width: 120px;
`;
const Desc = styled.div`
    margin: 20px 0px;
`;
const Courtesy = styled.div`
    font-size: small;
`;
const SocialContainer = styled.div`
    display: flex;
    align-items: center;
`;

const SocialIcon = styled.div`
    margin-right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #${(props) => {
            return props.color;
        }};
`;

const Right = styled.div`
margin-top:20px;
    flex: 1;
`;

const ContactItem=styled.div`
margin-bottom:20px;
display:flex;
align-items: center;
cursor: pointer;

`;

const Payment=styled.img`
margin-top:10px;
cursor: pointer;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Image src="/images/logo.png" />
                <Desc>
                    The content of this site is protected by copyright and remains the property of KA
                    <br />
                    <Courtesy>Picture Courtesy:freepik, unsplash,ibb</Courtesy>
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <YouTubeIcon />
                    </SocialIcon>
                    <SocialIcon color="FF0000">
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
           <Title>Contact</Title>
           <ContactItem><FmdGoodIcon style={{marginRight:"10px"}}/>622 Dixie Path, South Robinchester 99836</ContactItem>
           <ContactItem><LocalPhoneIcon style={{marginRight:"10px"}}/>+01 224 344 873</ContactItem>
           <ContactItem><EmailIcon style={{marginRight:"10px"}}/>contact@ka.com</ContactItem>
           <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    );
};

export default Footer;
