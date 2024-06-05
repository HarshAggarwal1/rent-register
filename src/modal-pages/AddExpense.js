import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators } from "../app/state";

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

function AddExpenses() {
    // Property Select
    const [property, setProperty] = React.useState('');
    const handlePropertyChange = (event) => {
        setProperty(event.target.value);
    };

    // Mode of Payment Select
    const [modeOfPayment, setModeOfPayment] = React.useState('');
    const handleModeOfPaymentChange = (event) => {
        setModeOfPayment(event.target.value);
    };

    // modal
    const dispatch = useDispatch();
    const { toggleModal } = bindActionCreators(actionCreators, dispatch);
    return (
        <AddExpense>
            <Card className="w-full" sx={{ borderStartStartRadius: '0.5rem', borderStartEndRadius: '0.5rem' }}>
                <div className="flex items-center justify-between border-b px-6 py-4 rounded-s-lg">
                    <h2 className="text-xl font-bold">Add Expense</h2>
                </div>
            </Card>
            <CardContent className="space-y-4 px-6 py-8">
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
                <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                    <div className="grid gap-2">
                        <FormControl>
                            <InputLabel size="normal" focused>Amount</InputLabel>
                            <OutlinedInput
                                id="amount"
                                type="number"
                                label="Amount"
                                inputProps={{ min: 0 }}
                            />
                        </FormControl>
                    </div>
                    <div className="grid gap-2">
                        <InputLabel size="normal" focused>Date</InputLabel>
                        <Input
                            id="date"
                            type="date"
                        />          
                    </div>
                </div>
                <div>
                    <FormControl sx={{ width: '100%'}}>
                        <InputLabel size="normal" focused>Mode of Payment</InputLabel>
                        <Select
                            labelId="mode-of-payment"
                            id="mode-of-payment"
                            value={modeOfPayment}
                            label="Mode of Payment"
                            onChange={handleModeOfPaymentChange}
                        >
                        <MenuItem value='Cash'>Cash</MenuItem>
                        <MenuItem value='Card'>Card</MenuItem>
                        <MenuItem value='Online'>Online</MenuItem>
                        <MenuItem value='Cheque'>Cheque</MenuItem>
                        <MenuItem value='Bank Transfer'>Bank Transfer</MenuItem>
                        <MenuItem value='Other'>PhonePe</MenuItem>
                        <MenuItem value='Other'>PayTM</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ width: '100%'}}>
                        <InputLabel size="normal" focused>Description</InputLabel>
                        <OutlinedInput
                            id="description"
                            multiline
                            rows={4}
                            label="Description"
                        />
                    </FormControl>
                </div>
            </CardContent>
            <CardActions className="flex justify-end px-6 py-4">
                <Button startIcon={<AddIcon />} color="primary" variant="contained">Add</Button>
                <Button startIcon={<CloseIcon />} color="error" variant="contained" onClick={() => toggleModal(false)}>Close</Button>
            </CardActions>
        </AddExpense>
    )
}

export default AddExpenses;

const AddExpense = styled.div`
`;