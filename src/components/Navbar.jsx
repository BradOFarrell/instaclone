import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';

const NavWrapper = styled.div`
  background-color: #9999FF;
  color: #333399;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 5vw;
  width: 90vw;
  height: 25px;
  border-bottom: 1px solid rgba(0,0,0,.0975);
  p{
    font-size: 1.75rem;
    font-family: "Times New Roman", Georgia, Serif;
    margin: 0;
    svg{
      margin-bottom: 5px;
    }  
  }
`
const SearchContainer = styled.div`
  background: #fafafa;
  border: 1px solid #dbdbdb;
  width: 25%;
  padding: 7px;
  border-radius: 3px;
  color: #999;
  svg{
    margin-bottom: 5px;
  }
  input{
    border: none;
    font-weight: 300;
    background: transparent;
    text-align: center;
  }
`;


class Navbar extends Component{
  render(){
    
    return (
      <NavWrapper>
        <p><FaInstagram /> | Instaclone</p>
          <SearchContainer><input type="text" placeholder="Search"/></SearchContainer>
          <FaCompass size={28} />
          <FaHeartO size={28} />
          <FaUser size={28} />
      </NavWrapper>
    );
  }
}

export default Navbar