import styled from "styled-components";

export const ContainerProducts = styled.div`
    max-width: 1000px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
`

export const CardProduct = styled.div`
    width: 30%;
    background-color: #f1f1f1;
    margin-bottom: 15px;
    padding: 1px 1px 10px 1px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    img {
        width: 100%;
        object-fit: cover;
        height: 300px;
    }

    .product-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 3px;
    }

    .product-name {
        font-weight: 500;
        color: #000;
        text-transform: uppercase;
        font-size: 18px;
    }

    .product-price {
        font-weight: 600;
        color: #000;
        text-transform: uppercase;
        font-size: 24px;
    }

    button {
        width: 98%;
        padding: 10px;
        background-color: #2958ce;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        margin-top: 3px;
        border: none;
        margin: 0 auto;

        span {
            color: #fff;
            margin-left: 15px;
        }
    }
`

export const PageNumber = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        padding: 10px 50px;
        background-color: #2958ce;
        border-radius: 5px;
        border: none;
        color: #fff;
        margin: 8px;
    }
`