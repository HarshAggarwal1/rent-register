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
    field1: {
        title: 'Name',
        value: 'Tenant Name',
    },
    field2: {
        title: 'Phone',
        value: 'Tenant Phone',
    },
    field3: {
        title: 'Address',
        value: 'Tenant Address',
    },
    field4: {
        title: 'Rent due date',
        value: 'Rent Due Date',
    },
    field5: {
        title: 'Move in date',
        value: 'Move In Date',
    },
    field6: {
        title: 'Move out date',
        value: 'Move Out Date',
    }
}];

function Dashboard() {
    return (
        <DashBoard className="min-h-screen flex-col bg-gray-200 pt-24 pb-8 ps-6 pe-6 gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                <DashboardBox title={tenant} />
                <DashboardBox title={tenant} />
                <DashboardBox title={tenant} />
                <DashboardBox title={tenant} />
                <DashboardBox title={tenant} />
                <DashboardBox title={tenant} />
            </div>
        </DashBoard>
    );
}

export default Dashboard;

const DashBoard = styled.div`
    min-width: 100vw;
`;
