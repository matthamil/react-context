import React from "react";
import Product from "./Product";
import { PropTypes as T } from "prop-types";
import Card from "../shared/Card";
import spinner from "../../images/spinner.svg";
import api from "../../api";
import "./ProductList.css";

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <img src={spinner} alt="Loading products" />
  </div>
);

export default class ProductList extends React.Component {
  static propTypes = {
    addToCart: T.func.isRequired
  };

  state = {
    loading: true,
    products: []
  };

  componentDidMount() {
    api.fetchProducts().then(products => {
      this.setState({ products, loading: false });
    });
  }

  render() {
    const { addToCart } = this.props;
    const { products, loading } = this.state;
    return (
      <Card title="Products" gridColumn={2}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          products.map(product => (
            <Product
              {...product}
              key={product.sku}
              addToCart={() => addToCart(product)}
            />
          ))
        )}
      </Card>
    );
  }
}
