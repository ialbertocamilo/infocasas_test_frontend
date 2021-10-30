import {Box, Button, FormControl, OutlinedInput} from "@mui/material";
import {TaskComponent} from "./TaskComponent";
import * as React from "react";
import {useEffect, useState} from "react";
import {useTasks} from "../../hooks/useTasks";
import taskStore from "../../store/TaskStore";

export function TaskContainer() {


    const {searchTask} = useTasks()

    const [search, setSearch] = useState('')

    useEffect(() => {
        void searchTask(search)
    }, [])

    async function findTask() {
        await searchTask(search)
    }

    return (
        <div style={{width: '100%'}}>
            <Box maxWidth="sm" sx={{mx: "auto", mt: 2, p: 2}} style={{backgroundColor: "#ffff", borderRadius: 6}}>
                <FormControl sx={{width: "100%", display: "inline-flex", flexDirection: "row"}}>
                    <OutlinedInput style={{width: "100%"}} placeholder="Buscar tarea" value={search}
                                   onChange={(e) => setSearch(e.target.value)}/>
                    <Button onClick={findTask} variant="contained">Buscar</Button>
                </FormControl>
                <TaskComponent  />
            </Box>
        </div>
    )
}
