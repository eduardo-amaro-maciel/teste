import styled from "styled-components"

export const ProductCart = styled.div`
    width: 100%;
    padding: 10px;
    background-color: #f1f1f1;
    display: flex;
    margin: 12px 0;
    border-radius: 20px;
    align-items: center;
    justify-content: space-between;

    img {
        border-radius: 50%;
        margin-right: 20px;
    }

    .product-name-cart {
        font-size: 18px;
        font-weight: 700;
        color: #000;
        text-transform: uppercase;
        margin-right: 20px;
    }

    .price-product-cart {
        font-size: 18px;
        font-weight: 700;
        color: #1b1a1a;
        text-transform: uppercase;
    }

    .remove-product-cart {
        border: none;
        color: red;
        text-decoration: underline;
        margin: 0 10px;
    }

    .amount-of-product-cart {
        border: 1px solid black;
        width: 50px;
        border-radius: 7px;
        padding: 3px 10px;
        margin: 0 10px;
    }

    .finalize-purchase-cart {
        padding: 10px 50px;
        border: none;
        border-radius: 7px;
        color: #f1f1f1;
        background-color: #0753df; 
    }
`