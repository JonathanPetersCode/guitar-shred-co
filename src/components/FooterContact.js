import React from 'react';
import styled from "styled-components";

export default function FooterContact() {
  return (
    <OffersContainer>
    <div className="container">
        <ul className="row">
          <li className="col-6">Give us a call: <br/> (555)-666-777</li>
          <li className="col-6">Send us an E-mail: <br/> mail@GuitarShred.com</li>
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
box-shadow: 5px 10px rgba(0, 0, 0, 0.084);
border: solid 3px var(--mainYellow);

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