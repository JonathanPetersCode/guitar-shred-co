import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
          <div className="card">
          <ProductConsumer>
            {value => (
            <div className="img-container p-10" 
            onClick={() => value.handleDetail(id)
            }>
              <Link to="/details">
                <img src={img} alt="product" className="card-img-top"/>
              </Link>
              <button 
              className="cart-btn" 
              disabled={inCart ? true : false} onClick={() => {value.addToCart(id);
                value.openModal(id);
              }}
              >
                {inCart ? (
                <p className="text-capitalize mb-0" disabled> {" "} In Bag</p>) : ( 
                  <i className="fas fa-shopping-bag fa-2x"/>
                  )}
              </button>
            </div>
            )}

          </ProductConsumer>
            <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0 product-name">
            {title}</p>
            <h5 className="price-color mb-0">
              <span className="mr-2">$</span>
              {price}
              </h5>
            </div>
          </div>
        </ProductWrapper>
    );
  }
}
Product.protoTypes = {
  product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card{
    border-color: var(--mainYellow);
    transition: all 1s linear;
    box-shadow: 5px 10px rgba(0, 0, 0, 0.084);
  }
  .card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  .card-footer p{
    font-family: 'PT Sans', sans-serif;
  }
  .card
  &:hover{
    .card{
      border: 0.04rem solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2)
    }
    .card-footer{
      background: rbga(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top{
    transition: all .5s linear;
  }
  .img-container:hover .card-img-top{
    transform: scale(1.1);
  }
  .cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all .40s linear;
  }
  .img-container:hover .cart-btn{
    transform: translate(0, 0);
  }
  .cart-btn:hover{
    color: var(--mainYellow);
    cursor: pointer;
  }
  .product-name{
    text-decoration: underline;
    font-weight: bold;
  }
`;
