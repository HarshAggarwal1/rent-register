import React from "react";

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
    return (
        <Card className=" pt-4 pb-4 ps-4 pe-4">
            <CardHeader
                title={props.data[0].title}
            />
            <CardContent>
                <div className="grid grid-cols-2 gap-2">
                    {props.data[0].child.map((item, index) => (
                        <div key={index}>
                            <Typography variant="h6" component="div">
                                {item.title}
                            </Typography>
                            <Typography color="text.secondary">
                                {item.value}
                            </Typography>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardActions>
                <Stack direction="row" spacing={2}>
                    <Button size="small" variant="outlined">Details</Button>
                    <Button size="small" variant="outlined">Modify</Button>
                </Stack>
            </CardActions>
        </Card>
    );
}

export default Box;