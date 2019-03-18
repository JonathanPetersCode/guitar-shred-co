import styled from "styled-components";


export const ButtonContainer = styled.button `
text-transform: capitalize;
font-size: 1.4 rem;
background: tranparent;
border: 0.05rem solid var(--lightBlue);
border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
color: var(--mainDark);
border-radius: 0.5rem;
padding: 1rem 0.6rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background:${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color:var(--mainWhite);
}
&:focus{
    outline:none;
}
`;