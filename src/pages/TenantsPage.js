import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Box from "../components/Box";

const tenant = [{
    title: 'Tenant Name',
    child: [
        {
            title: 'Name',
            value: 'Tenant Name',
        },
        {
            title: 'Phone',
            value: 'Tenant Phone',
        },
        {
            title: 'Address',
            value: 'Tenant Address',
        },
        {
            title: 'Rent due date',
            value: 'Rent Due Date',
        },
        {
            title: 'Move in date',
            value: 'Move In Date',
        },
        {
            title: 'Move out date',
            value: 'Move Out Date',
        }
    ]
}];

function TenantsPage() {
    const { menu } = useSelector((state) => state.menu);
    return (
        <Tenants 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            menu={menu}
        >
            <Box title="Tenant" data={tenant[0].child} />
            <Box title="Tenant" data={tenant[0].child} />
            <Box title="Tenant" data={tenant[0].child} />
            <Box title="Tenant" data={tenant[0].child} />
            <Box title="Tenant" data={tenant[0].child} />
            <Box title="Tenant" data={tenant[0].child} />
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