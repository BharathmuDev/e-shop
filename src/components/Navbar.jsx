import React from "react";
import styled from "styled-components";
import { BiSearchAlt2 } from 'react-icons/bi';
import { TiShoppingCart } from 'react-icons/ti';

const Container = styled.div`
  height: 60px;
  background-color: #F3F3F3;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  background-color: #F3F3F3;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>English</Language>
            <SearchContainer>
                <Input />
                <BiSearchAlt2 />
            </SearchContainer>
        </Left>
        <Center>
            <Logo>E-shop</Logo>
            </Center>
        <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>LOGIN</MenuItem>
            <MenuItem>
            <TiShoppingCart />
            </MenuItem>
        </Right>
        </Wrapper>
    </Container>
  );
};

export default Navbar;
