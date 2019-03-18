import React from 'react';
import styled from "styled-components";

export default function ProductHeader() {
  return (
    <div className="text-center">
    <HeaderContainer className="container">
      <img src="http://tinyurl.com/yyne3bja" className="banner-container img-fluid" alt="Header"/>
      </HeaderContainer>
    </div>
  )
}

const HeaderContainer = styled.div`
  margin-bottom: .3rem;
  img{
    border-radius: 5px;
    border: solid 2px var(--mainYellow);
    box-shadow: 5px 10px rgba(0, 0, 0, 0.084);
    min-width: 100%;
  }
`

