import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators } from "../app/state";

// MUI Components
import { styled } from 'styled-components';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// Tabs
import OverviewPage from "../pages/Dashboard/OverviewPage";
import PropertiesPage from "../pages/PropertiesPage";
import ReceiptsPage from "../pages/ReceiptsPage";
import ExpensesPage from "../pages/ExpensesPage";

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
import TenantsPage from "../pages/TenantsPage";

function Dashboard() {
    const dispatch = useDispatch();
    const { changeMenu } = bindActionCreators(actionCreators, dispatch);
    const { tab } = useSelector((state) => state.tab);
    const { menu } = useSelector((state) => state.menu);
    console.log(tab);
    return (
        <div className="min-h-screen">
            <Menu 
                className=" fixed bg-gray-200 left-0 top-0 max-h-screen ps-8 pe-8 xxxs:w-screen xxs:w-screen xs:w-screen sm:w-screen md:w-screen lg:w-48 xl:w-48 2xl:w-48"
                menu={menu}
            >
                <Stack 
                minHeight={"100vh"}
                direction="column" 
                spacing={4}
                alignItems="center"
                justifyContent="center"
                > 
                    <Button 
                        startIcon={<DashboardOutlinedIcon />}
                        onClick={() => changeMenu("dashboard")}
                    >
                        Dashboard
                    </Button>
                    <Button 
                        startIcon={<Person3OutlinedIcon />}
                        onClick={() => changeMenu("tenants")}
                    >
                        Tenants
                    </Button>
                    <Button 
                        startIcon={<MapsHomeWorkOutlinedIcon />}
                        onClick={() => changeMenu("properties")}
                    >
                        Properties
                    </Button>
                    <Button 
                        startIcon={<ReceiptLongOutlinedIcon />}
                        onClick={() => changeMenu("receipts")}
                    >
                        Receipts
                    </Button>
                    <Button 
                        startIcon={<CurrencyRupeeOutlinedIcon />}
                        onClick={() => changeMenu("expenses")}
                    >
                        Expenses
                    </Button>
                </Stack>
            </Menu>
            <DashBoard className="min-h-screen flex bg-gray-200 xxs:pt-28 md:pt-24 pb-8 ps-4 pe-4 justify-end">
                {renderPage(tab)}
                
            </DashBoard>
        </div>
    );
}

function renderPage(tab) {
    switch(tab.menuValue) {
        case "dashboard":
            return <OverviewPage />;
        case "tenants":
            return <TenantsPage />;
        case "properties":
            return <PropertiesPage />;
        case "receipts":
            return <ReceiptsPage />;
        case "expenses":
            return <ExpensesPage />;
        default:
            return <OverviewPage />;
    }
}

export default Dashboard;


const DashBoard = styled.div`
`;

const Menu = styled.div`
    z-index: 10;
    transform: ${props => props.menu ? 'translateX(-100%)' : 'translateX(0%)'};
    transition: transform 0.5s ease-in-out;
    @media only screen and (min-height: 0px) and (max-height: 534px) {
        padding-top: 7rem;
        overflow-y: auto;
    }
`;
