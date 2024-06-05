import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators } from "../app/state";

// MUI Components
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// MUI Icons
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

// MUI Styles
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function AddProperties() {
    // modal
    const dispatch = useDispatch();
    const { toggleModal } = bindActionCreators(actionCreators, dispatch);

    // Autocomplete filter options for addresses
    const filterOptions = (options, { inputValue }) => {
        return options.filter(option =>
            Object.keys(option).some(key =>
                option[key].toString().toLowerCase().includes(inputValue.toLowerCase())
            )
        );
    };
    return (
        <AddProperty>
            <Card className=" md:min-w-96 w-full" sx={{ borderStartStartRadius: '0.5rem', borderStartEndRadius: '0.5rem' }}>
                <div className="flex items-center justify-between border-b px-6 py-4 rounded-s-lg">
                    <h2 className="text-xl font-bold">Add Property</h2>
                </div>
            </Card>
            <CardContent className="space-y-4 px-6 py-8">
                <div>
                    <Autocomplete
                        id="address"
                        sx={{ width: '100%' }}
                        options={addresses}
                        autoHighlight
                        getOptionLabel={(option) => `${option.home} ${option.street} ${option.area} ${option.landmark}`}
                        filterOptions={filterOptions}
                        renderOption={(props, option) => (
                            <Box component="li" {...props}>
                                {option.home} {option.street} {option.area} {option.landmark}
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                            {...params}
                            label="Enter Address"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                            />
                        )}
                    />
                </div>
                <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                    <div className="grid gap-2">
                        <Autocomplete
                            id="floor"
                            options={floors}
                            autoHighlight
                            getOptionLabel={(option) => option.floor}
                            renderOption={(props, option) => (
                                <Box component="li" {...props}>
                                    {option.floor}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                label="Floor"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                                />
                            )}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Autocomplete
                            id="propertyType"
                            options={propertyTypes}
                            autoHighlight
                            getOptionLabel={(option) => option.type}
                            renderOption={(props, option) => (
                                <Box component="li" {...props}>
                                    {option.type}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                label="Property Type"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                    <div className="grid gap-2">
                        <Autocomplete
                            id="city"
                            options={cities}
                            autoHighlight
                            getOptionLabel={(option) => option.city}
                            renderOption={(props, option) => (
                                <Box component="li" {...props}>
                                    {option.city}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                label="City"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                                />
                            )}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Autocomplete
                            id="state"
                            options={states}
                            autoHighlight
                            getOptionLabel={(option) => option.state}
                            renderOption={(props, option) => (
                                <Box component="li" {...props}>
                                    {option.state}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                label="State"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                                />
                            )}
                        />
                    </div>
                </div>
            </CardContent>
            <CardActions className="flex justify-end px-6 py-4">
                <Button startIcon={<AddIcon />} color="primary" variant="contained">Add</Button>
                <Button startIcon={<CloseIcon />} color="error" variant="contained" onClick={() => toggleModal(false)}>Close</Button>
            </CardActions>
        </AddProperty>
    )
}

export default AddProperties;

const AddProperty = styled.div`
`;

// Property Addresses
const addresses = [
    {
        home: 'L-215',
        street: 'Eklavya Road',
        area: 'Shakurpur Colony',
        landmark: 'behind Sheetla Mata Mandir'
    },
    {
        home: 'I-407',
        street: '',
        area: 'Shakurpur Colony',
        landmark: 'near MCD Primary School'
    },
    {
        home: 'D-77',
        steet: 'Kabir Das Marg',
        area: 'Shakurpur Colony',
        landmark: 'opposite Police Station Subhash Place'
    },
    {
        home: 'E-107',
        street: '',
        area: 'Pocket-1 Bawana Industrial Area',
        landmark: ''
    },
    {
        home: 'G-57',
        street: '',
        area: 'RIICO Industrial Area',
        landmark: ''
    },
    {
        home: 'Plot-27',
        street: '',
        area: 'Pocket-15A Sector-24 Rohini',
        landmark: 'near Adril High School'
    }
];

// Indian cities
const cities = [
    {
        city: 'New Delhi'
    },
    {
        city: 'Jaipur'
    }
];

// Indian states
const states = [
    {
        state: 'Delhi'
    },
    {
        state: 'Rajasthan'
    }
];

// Property Types
const propertyTypes = [
    {
        type: 'Residential'
    },
    {
        type: 'Commercial'
    },
    {
        type: 'Industrial'
    }
];

// Floors
const floors = [
    {
        floor: 'Ground'
    },
    {
        floor: 'First'
    },
    {
        floor: 'Second'
    },
    {
        floor: 'Third'
    },
    {
        floor: 'Fourth'
    },
    {
        floor: 'Fifth'
    },
    {
        floor: 'Sixth'
    }
];