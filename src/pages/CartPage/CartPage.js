import React from "react";

import RelatedProducts from "../../components/ProductDetailsComponent/RelatedProducts";
import PageBanner from "../../components/commonComponent/PageBanner/PageBanner";

import { Link } from "react-router-dom";
// import CheckOutSidebar from "../../components/CheckOutPageComponent/CheckOutSidebar";
import OrderPoroductList from "../../components/CheckOutPageComponent/OrderPoroductList";
// import { Button } from "react-bootstrap";

const CartPage = () => {
  return (
    <div>
      <PageBanner title="Cart" dontShowTitle={true} menu={true} />
      <div style={{ height: "500px", margin: "20px", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* <CheckOutSidebar /> */}
          <OrderPoroductList />
        </div>
        <div style={{ position: "absolute", bottom: "0", right: "0" }}>
          <Link to="/check-out">
            <button type="button" class="btn btn-danger">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default CartPage;
