import styled from "styled-components";

export const NavTop = styled.div`
    width: 100%;
    background-color: #141414;
    display: flex;
    height: 80px;
    padding: 10px 20px;
    align-items: center;
    justify-content: space-between;

    span {
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
    }

    a {
        appearance: none;
    
        &:hover {
            cursor: pointer;
        }
    }
`