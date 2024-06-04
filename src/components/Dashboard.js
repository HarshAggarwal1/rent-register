import React from "react";
import DashboardBox from "./DashboardBox";

// MUI Components
import { styled } from 'styled-components';

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
    return (
        <DashBoard className="min-h-screen flex-col bg-gray-200 pt-24 pb-8 ps-4 pe-4 gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <DashboardBox data={tenant} />
                <DashboardBox data={tenant} />
                <DashboardBox data={tenant} />
                <DashboardBox data={tenant} />
                <DashboardBox data={tenant} />
                <DashboardBox data={tenant} />
            </div>
        </DashBoard>
    );
}

export default Dashboard;

const DashBoard = styled.div`
    max-width: 100vw;
`;
