import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function TenantsPage() {
    const { menu } = useSelector((state) => state.menu);
    return (
        <Tenants 
            className=" flex justify-center"
            menu={menu}
        >
            Tenants Page
        </Tenants>
    );
}

export default TenantsPage;

const Tenants = styled.div`
    @media (max-width: 1024px) {
        min-width: 100%;
    }
    @media (min-width: 1024px) {
        min-width: ${props => props.menu ? '100%' : 'calc(100% - 12rem)'};
        transition: min-width 0.5s ease-in-out;
    }
`;