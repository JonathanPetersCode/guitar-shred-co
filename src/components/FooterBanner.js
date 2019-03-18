import React from 'react';
import styled from "styled-components";

export default function FooterBanner() {
  return (
    <div className="text-center">
    <BannerContainer className="container">
      <img src="http://tinyurl.com/y35ll2ys" className="banner-container img-fluid" alt="Footer"/>
      </BannerContainer>
    </div>
  )
}
const BannerContainer = styled.div`
  margin-bottom: .3rem;
  img{
    border-radius: 5px;
    border: solid 3px var(--mainYellow);
    box-shadow: 5px 10px rgba(0, 0, 0, 0.084);
  }
`

