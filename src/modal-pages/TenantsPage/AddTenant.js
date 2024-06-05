import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators } from "../../app/state";

// MUI Components
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

// MUI Icons
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

// MUI Styles
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function AddTenants() {
    // Property Select
    const [property, setProperty] = React.useState('');
    const handlePropertyChange = (event) => {
        setProperty(event.target.value);
    };

    // ID Type
    const [idType, setIdType] = React.useState('');
    const handleIdTypeChange = (event) => {
        setIdType(event.target.value);
    };

    // modal
    const dispatch = useDispatch();
    const { toggleModal } = bindActionCreators(actionCreators, dispatch);
    return (
        <AddTenant>
            <Card className="w-full" sx={{ borderStartStartRadius: '0.5rem', borderStartEndRadius: '0.5rem' }}>
                <div className="flex items-center justify-between border-b px-6 py-4 rounded-s-lg">
                    <h2 className="text-xl font-bold">Add Tenant</h2>
                </div>
            </Card>
            <CardContent className="space-y-4 px-6 py-8">
                <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                    <div className="grid gap-2">
                        <FormControl sx={{ width: '100%'}}>
                            <InputLabel size="normal" focused>First Name</InputLabel>
                            <OutlinedInput id="first-name" type="text" label="First Name" />
                        </FormControl>
                    </div>
                    <div className="grid gap-2">
                        <FormControl sx={{ width: '100%'}}>
                            <InputLabel size="normal" focused>Last Name</InputLabel>
                            <OutlinedInput id="last-name" type="text" label="Last Name" />
                        </FormControl>
                    </div>
                </div>
                <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                    <div className="grid gap-2">
                        <FormControl sx={{ width: '100%'}}>
                            <InputLabel size="normal" focused>Contact Number</InputLabel>
                            <OutlinedInput id="phone" type="text" label="Contact Number" />
                        </FormControl>
                    </div>
                    <div className="grid gap-2">
                        <FormControl sx={{ width: '100%'}}>
                            <InputLabel size="normal" focused>ID Number</InputLabel>
                            <OutlinedInput id="id" type="text" label="ID Number" />
                        </FormControl>
                    </div>
                </div>
                <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                    <div className="grid gap-2">
                        <FormControl sx={{ width: '100%'}}>
                            <InputLabel size="normal" focused>ID Type</InputLabel>
                            <Select
                                labelId="id-type"
                                id="id-type"
                                value={idType}
                                label="ID Type"
                                onChange={handleIdTypeChange}
                            >
                                <MenuItem value='Aadhar'>Aadhar</MenuItem>
                                <MenuItem value='Voter ID'>Voter ID</MenuItem>
                                <MenuItem value='PAN'>PAN</MenuItem>
                                <MenuItem value='Driving License'>Driving License</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="grid gap-2">
                        <InputLabel size="normal" focused>Move In Date</InputLabel>
                        <Input id="move-in-date" type="date" />
                    </div>
                </div>
                <div>
                    <FormControl sx={{ width: '100%'}}>
                        <InputLabel size="normal" focused>Property</InputLabel>
                        <Select
                            labelId="property"
                            id="property"
                            value={property}
                            label="Property"
                            onChange={handlePropertyChange}
                        >
                        <MenuItem value='Property1'>Property1</MenuItem>
                        <MenuItem value='Property2'>Property2</MenuItem>
                        <MenuItem value='Property3'>Property3</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </CardContent>
            <CardActions className="flex justify-end px-6 py-4">
                <Button startIcon={<AddIcon />} color="primary" variant="contained">Add</Button>
                <Button startIcon={<CloseIcon />} color="error" variant="contained" onClick={() => toggleModal(false)}>Close</Button>
            </CardActions>
        </AddTenant>
    )
}

export default AddTenants;

const AddTenant = styled.div`
`;