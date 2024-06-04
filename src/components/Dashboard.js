import React from "react";
import DashboardBox from "./DashboardBox";
import { useSelector } from "react-redux";

// MUI Components
import { styled } from 'styled-components';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// MUI Icons
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

// MUI Styles
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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

function Dashboard() {
    const { menu } = useSelector((state) => state.menu);
    return (
        <div>
            <Menu 
                className=" fixed bg-gray-200 left-0 top-0 min-h-screen ps-8 pe-8 xxxs:w-screen xxs:w-screen xs:w-screen sm:w-screen md:w-screen lg:w-48 xl:w-48 2xl:w-48"
                menu={menu}
            >
                <Stack 
                minHeight={"100vh"}
                direction="column" 
                spacing={4}
                alignItems="flex-start"
                justifyContent="center"
                > 
                    <Button startIcon={<DashboardOutlinedIcon />}>Dashboard</Button>
                    <Button startIcon={<Person3OutlinedIcon />}>Tenants</Button>
                    <Button startIcon={<MapsHomeWorkOutlinedIcon />}>Properties</Button>
                    <Button startIcon={<ReceiptLongOutlinedIcon />}>Receipts</Button>
                    <Button startIcon={<CurrencyRupeeOutlinedIcon />}>Expenses</Button>
                </Stack>
            </Menu>
            <DashBoard 
                className="min-h-screen flex bg-gray-200 pt-24 pb-8 ps-4 pe-4"
                menu={menu}
            >
                
                <DashboardPage 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    menu={menu}
                >
                    <DashboardBox data={tenant} />
                    <DashboardBox data={tenant} />
                    <DashboardBox data={tenant} />
                    <DashboardBox data={tenant} />
                    <DashboardBox data={tenant} />
                    <DashboardBox data={tenant} />
                </DashboardPage>
            </DashBoard>
        </div>
    );
}

export default Dashboard;

const DashBoard = styled.div`
    justify-content: ${props => props.menu ? 'end' : 'flex-end'};
`;

const DashboardPage = styled.div`
    @media (max-width: 1024px) {
        min-width: 100%;
    }
    @media (min-width: 1024px) {
        min-width: ${props => props.menu ? '100%' : 'calc(100% - 12rem)'};
        transition: min-width 0.5s ease-in-out;
    }
`;

const Menu = styled.div`
    z-index: 10;
    transform: ${props => props.menu ? 'translateX(-100%)' : 'translateX(0%)'};
    transition: transform 0.5s ease-in-out;
`
