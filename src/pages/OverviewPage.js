import React from "react";
import Box from "../components/Box";
import { useSelector } from "react-redux";
import styled from "styled-components";

const tenant = [{
    title: 'Recent Tenant',
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

function OverviewPage() {
    const { menu } = useSelector((state) => state.menu);
    return (
        <Overview 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            menu={menu}
        >
            <Box title="Recent Tenant" data={tenant[0].child} />
            <Box title="Receivables" data={tenant[0].child} />
            <Box title="Recent Receipt" data={tenant[0].child} />
            <Box title="Expenses" data={tenant[0].child} />
            <Box title="Earnings" data={tenant[0].child} />
        </Overview>
    );
}

export default OverviewPage;

const Overview = styled.div`
    @media (max-width: 1024px) {
        min-width: 100%;
    }
    @media (min-width: 1024px) {
        min-width: ${props => props.menu ? '100%' : 'calc(100% - 12rem)'};
        transition: min-width 0.5s ease-in-out;
    }
`;
