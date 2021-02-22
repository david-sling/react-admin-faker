import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Title } from 'react-admin';
export default ({name}) => (
    <Card>
        <Title title="Welcome to the administration" />
        <CardContent>
            <Typography style={{fontSize: 25}} >S4S_TEST</Typography>
        </CardContent>
        <CardContent>
            <Typography>{name}</Typography>
        </CardContent>
    </Card>
);