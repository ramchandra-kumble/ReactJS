import React, { useState, useContext } from "react";
import style from "./featured-product.module.css";
import { MdShoppingCart } from "react-icons/md";
// import { FeaturedProducts } from "../../Data/FearuredProductData";
import ShowReview from "./../../commonComponent/ShowReview/ShowReview";
import { productPageProductData } from "./../../Data/ProductPageProductsData";
import { CardContext } from "./../../../App";
import { totalQuantity } from "../../../Utilis/GetTotalQuantity";

const FeaturedProduct = () => {
  const [FeaturedProductList] = useState(productPageProductData);
  const [ cardProductLength,setcardproductLength] = useContext(CardContext);

  const handelAddToCard = (product) => {
    const cardproducts = JSON.parse(localStorage.getItem("cards")) || [];
    const findProduct = cardproducts.findIndex((pro) => pro.id === product.id);

    if (findProduct < 0) {
      product["quantity"] = 1;
      cardproducts.push(product);
      localStorage.setItem("cards", JSON.stringify(cardproducts));
      const Quantity = totalQuantity();
    setcardproductLength(Quantity);
    } else {
      const exestProduct = cardproducts[findProduct];
      exestProduct.quantity += 1;
      cardproducts[findProduct] = exestProduct;
      localStorage.setItem("cards", JSON.stringify(cardproducts));
      const Quantity = totalQuantity();
      setcardproductLength(Quantity);
    }
  };

  return (
    <div className="row mt-5">
      {FeaturedProductList.length > 0 &&
        FeaturedProductList.slice(0, 3).map((product, index) => (
          <div key={index} className="col-md-4 mb-5 mb-md-0 ">
            <div className={`${style.featured__product__card} card`}>
              <div className={style.card__image_wrapper}>
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.productTitle}
                />
              </div>
              <div className="card-body">
                <ShowReview product={product} />
                <div className="pb-4">
                  <h5 className={`card-title white700 ${style.title}`}>
                    {product.productTitle}
                  </h5>
                  <h5
                    className={`card-title fs-13 font_rubik white700 font_oswald fw-500`}
                  >
                    One stop solution for Luxury Auto Parts
                  </h5>
                  {/* <p className={`card-text white200 ${style.description}`}>
                    {product.description}
                  </p> */}
                </div>
                <div className={`${style.price} font_oswald`}>
                  <p className="">RS.{product.price}</p>
                </div>
                <div>
                  <button
                    onClick={() => handelAddToCard(product)}
                    className={`${style.my_btn} d-flex align-items-center justify-content-center font_oswald btn`}
                  >
                    <MdShoppingCart className="me-2" /> <span>add to cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FeaturedProduct;
