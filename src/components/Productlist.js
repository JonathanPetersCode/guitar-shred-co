import React, { Component } from 'react'
import Product from "./Product";
import { ProductConsumer } from "../Context"
import ProductHeader from "./ProductHeader";
import FooterBanner from "./FooterBanner";
import Offers from "./Offers";
import FooterContact from "./FooterContact";

export default class Productlist extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
        <Offers />
        <ProductHeader />
          <div className="container">
            <div className="row">
            <ProductConsumer>
              {(value) => {
               return value.products.map( product => {
                return <Product key={product.id} product={product} />;
               });
              }}
            </ProductConsumer>
            </div>
          </div>
          <FooterBanner />
          <FooterContact />
        </div>
      </React.Fragment>
    );
  }
}
