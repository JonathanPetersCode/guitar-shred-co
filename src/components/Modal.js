import React, { Component } from 'react'
import styled from "styled-components";
import {ProductConsumer} from "../Context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";


export default class Modal extends Component {
  render() {
    return (
        <ProductConsumer>
            {(value) => {
                const {modalOpen, closeModal} = value;
                const{img, title, price} = value.modalProduct;

                if(!modalOpen){
                    return null;
                } else {
                    return (
                    <ModalContainer>
                        <div className="container">
                            <div className="row">
                              <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                <h5>Item Added to the Bag</h5>
                                <img src={img} className="img-fluid" alt="product"/>
                                    <h5>{title}</h5>
                                    <h5 className="text-dark">Price : ${price}
                                    </h5>
                                    <Link to ="/">
                                    <ButtonContainer onClick = {
                                            () => closeModal()}>
                                    Continue Shopping  
                                    </ButtonContainer>
                                    </Link>
                                    <Link to ="/cart">
                                    <ButtonContainer inCart onClick={() => closeModal()}>
                                        Go to bag  
                                    </ButtonContainer>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ModalContainer>
                    );
                }
            }}
        </ProductConsumer>
    );
  }
}
const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, .3);
justify-content: center;
font-family: 'PT Sans', sans-serif;
text-align: center;
#modal{
    background: var(--mainWhite);
}
.to-bag{
    color: var(--mainWhite); ;
    background-color: var(--mainYellow);
}
`;
