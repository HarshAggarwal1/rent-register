import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators } from "../app/state";
import Box from "../components/Box";

// MUI Components
import Button from "@mui/material/Button";

// MUI Icons
import AddIcon from '@mui/icons-material/Add';

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
    const { tab } = useSelector((state) => state.tab);
    const dispatch = useDispatch();
    const { toggleModal } = bindActionCreators(actionCreators, dispatch);
    return (
        <TenantPage
            className=" flex flex-col items-end gap-4" 
            menu={menu}
        >
            <Button 
                className="" 
                startIcon={<AddIcon />} 
                variant="outlined"
                onClick={() => toggleModal(true, tab.menuValue, "add_tenant", "add")}
            >
                Add New Tenant
            </Button>
            <Tenants 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
                menu={menu}
            >
                <Box title="Tenant" data={tenant[0].child} />
                <Box title="Tenant" data={tenant[0].child} />
                <Box title="Tenant" data={tenant[0].child} />
                <Box title="Tenant" data={tenant[0].child} />
                <Box title="Tenant" data={tenant[0].child} />
                <Box title="Tenant" data={tenant[0].child} />
            </Tenants>
        </TenantPage>
    );
}

export default TenantsPage;

const TenantPage = styled.div`
    @media (max-width: 1024px) {
        min-width: 100%;
    }
    @media (min-width: 1024px) {
        min-width: ${props => props.menu ? '100%' : 'calc(100% - 12rem)'};
        transition: min-width 0.5s ease-in-out;
    }
`;

const Tenants = styled.div`
    // @media (max-width: 1024px) {
    //     min-width: 100%;
    // }
    // @media (min-width: 1024px) {
    //     min-width: ${props => props.menu ? '100%' : 'calc(100% - 12rem)'};
    //     transition: min-width 0.5s ease-in-out;
    // }
`;