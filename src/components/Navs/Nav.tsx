import {AppBar, Box, Toolbar} from "@mui/material";
import * as React from "react";


export function Nav(){

    return (
        <Box sx={{flexGrow: 1}} style={{backgroundColor: "white"}}>
            <AppBar position={"static"}>
                <Toolbar>Task app</Toolbar>
            </AppBar>
        </Box>
    )
}
