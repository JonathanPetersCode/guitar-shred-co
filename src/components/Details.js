import React, { Component } from 'react'
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {id, company, img, info, price, title, inCart} = value.detailProduct
          return (
            <DetailsContainer>
            <div className="container py-5">
            {/*Product info */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
              <img src={img} className="img-fluid" alt="Product"/>
                </div>
                { /*Product Text */ }
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
              <h2 className="text-dark">{title}</h2>
              <h4 className="text-uppercase text-dark mt-3 mb-2">
              made by : <span product-title>{company}</span>
              </h4>
              <h4>
                <strong>
                  price: <span>$</span>
                  {price}
                </strong>
                </h4>
                <p className="text-capitalize text-dark font-weight-bold mt-3 mb-0 description">
                  Description:
                </p>
                <p className="text-dark lead">
                  {info}
                </p>
                {/* Buttons */}
                <div>
                  <Link to="/">
                    <ButtonContainer>
                      Return to Products
                    </ButtonContainer>
                  </Link>
                  <ButtonContainer 
                    cart
                    disabled = {inCart ? true : false}
                    onClick={() =>{
                      value.addToCart(id);
                      value.openModal(id);
                      }}
                    >
                    {inCart ? "inCart": "Add to Bag"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </div>
        </DetailsContainer>
          );
        }}
      </ProductConsumer>
    );
  }
}

const DetailsContainer = styled.div `
font-family: 'PT Sans', sans-serif;
text-align: center;

.product-title{
  text-align: center;
}
.description{
  font-size: 2rem;
}
`;
