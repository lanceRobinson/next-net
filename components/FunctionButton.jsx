import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useState} from "react";
import {Box, Grid, Paper, Typography} from "@mui/material";

const paperStyle = {
    width:'75%',
    height:'75%'
}
export default function BasicButtons() {
    const [ response, setResponse ] = useState('');

    const handleCLick = async () => {

        const res = await fetch('/.netlify/functions/hello-world')
            .then(response => response.json())
            .then(json => JSON.stringify(json))
            .catch(e => console.log(e))

        console.log('response',response)

        setResponse(res || 'No Go')

    }

    return (
        <Box style={paperStyle} >
            <Paper style={paperStyle}>
                <Typography>
                    {JSON.stringify(response)}
                </Typography>
            </Paper>
            <Button variant="contained" onClick={() => handleCLick()}>Run Function</Button>
        </Box>
    );
}