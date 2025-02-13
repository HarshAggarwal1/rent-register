import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators } from "../app/state";

// MUI Components
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";

// MUI Styles
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function Box(props) {
    const dispatch = useDispatch();
    const { toggleModal } = bindActionCreators(actionCreators, dispatch);
    const { tab } = useSelector((state) => state.tab);
    return (
        <Card className=" pt-4 pb-4 ps-4 pe-4">
            <CardHeader
                title={props.title}
                classes=".MuiCardHeader-title"
            />
            <CardContent>
                <div className="grid grid-cols-2 gap-2">
                    {props.data.map((item, index) => (
                        <div key={index}>
                            <Typography variant="h6" component="div">
                                {item.title}
                            </Typography>
                            <Typography sx={{ mb: 0.5 }} color="text.secondary">
                                {item.value}
                            </Typography>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardActions>
                <Stack sx={{ mt: 0.5 }} direction="row" spacing={2}>
                    <Button size="small" variant="outlined" onClick={() => toggleModal(true, tab.menuValue, "tenant_details", "show")}>Details</Button>
                </Stack>
            </CardActions>
        </Card>
    );
}

export default Box;