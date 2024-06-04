import React from "react";

// MUI Components
// import { styled } from 'styled-components';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// MUI Styles
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function DashboardBox(props) {
    return (
        <Card className=" pt-4 pb-4 ps-4 pe-4 rounded">
            <CardHeader
                title={props.title[0].title}
            />
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Typography variant="h6" component="div">
                            {props.title[0].field1.title}
                        </Typography>
                        <Typography color="text.secondary">
                            {props.title[0].field1.value}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6" component="div">
                            {props.title[0].field2.title}
                        </Typography>
                        <Typography color="text.secondary">
                            {props.title[0].field2.value}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6" component="div">
                            {props.title[0].field3.title}
                        </Typography>
                        <Typography color="text.secondary">
                            {props.title[0].field3.value}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6" component="div">
                            {props.title[0].field4.title}
                        </Typography>
                        <Typography color="text.secondary">
                            {props.title[0].field4.value}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6" component="div">
                            {props.title[0].field5.title}
                        </Typography>
                        <Typography color="text.secondary">
                            {props.title[0].field5.value}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6" component="div">
                            {props.title[0].field6.title}
                        </Typography>
                        <Typography color="text.secondary">
                            {props.title[0].field6.value}
                        </Typography>
                    </div>
                </div>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined">Modify</Button>
            </CardActions>
        </Card>
    );
}

export default DashboardBox;