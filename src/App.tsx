import * as React from 'react';
import {Box} from "@mui/material";
import "./css/styles.css"
import {Nav} from "./components/Navs/Nav";
import {TaskContainer} from "./components/Tasks/TaskContainer";

export default function App() {


    return (
        <Box>
            <Nav/>
            <TaskContainer/>
        </Box>
    );
}
