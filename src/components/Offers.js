import React from 'react';
import styled from "styled-components";

export default function Offers() {
  return (
    <OffersContainer>
    <div className="container">
        <ul className="row">
          <li className="col-4">"Free Shipping" for all orders over $49</li>
          <li className="col-4">30-Day <br/> Price Match Guarantee,
          maybe.</li>
          <li className="col-4">New Location <br/> 12-34 Guitar st, N.Y. 90210</li>
        </ul>
    </div>
    </OffersContainer>
  )
}
const OffersContainer = styled.div`
background: var(--mainBlue);
padding: 0rem;
color: var(--mainWhite);
list-style: none;
border: solid 1px var(--mainYellow);
margin-bottom: .5rem;
box-shadow: 5px 10px rgba(0, 0, 0, 0.084);

.row{
list-style: none;
text-align: center;
padding-left: 0;
font-family: 'Droid Sans', sans-serif;
}
.row li{
  padding: 0 .5rem;
  font-size: 1rem;
}
`;

