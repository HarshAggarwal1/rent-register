import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators } from "../app/state";

// MUI Components
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

// MUI Styles
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Modal Pages
import AddProperty from '../modal-pages/AddProperty';
import TenantDetails from "../modal-pages/TenantsPage/Details/TenantDetails";
import AddExpense from "../modal-pages/AddExpense";
import AddReceipt from "../modal-pages/AddReceipt";
import AddTenant from "../modal-pages/TenantsPage/AddTenant";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '90%',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24
};

function ModalPage() {
    const dispatch = useDispatch();
    const { toggleModal } = bindActionCreators(actionCreators, dispatch);
    const { modal } = useSelector((state) => state.modal);
    const handleClose = () => toggleModal(false);
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modal.modal}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
            backdrop: {
                timeout: 500,
            },
            }}
            keepMounted
            disableEnforceFocus
        >
            <Fade in={modal.modal}>
            <Box sx={style}>

                {renderPage(modal)}

            </Box>
            </Fade>
        </Modal>
    );
}

export default ModalPage;

function renderPage(modal) {
    if (modal.modal) {
        if (modal.tab === "tenants") {
            if (modal.page === "add_tenant") {
                return <AddTenant />
            }
            else if (modal.page === "tenant_details") {
                return <TenantDetails />
            }
        }
        else if (modal.tab === "properties") {
            if (modal.page === "add_property") {
                return <AddProperty />
            }
        }
        else if (modal.tab === "expenses") {
            if (modal.page === "add_expense") {
                return <AddExpense />
            }
        }
        else if (modal.tab === "receipts") {
            if (modal.page === "add_receipt") {
                return <AddReceipt />
            }
        }
    }
}