import React, {useRef, useState} from "react";
import {Button, Checkbox, FormControlLabel, List, ListItemButton, ListItemText, ListSubheader} from "@mui/material";
import {useTasks} from "../../hooks/useTasks";
import Modal from "../Modals/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import {Done} from "@mui/icons-material";
import taskStore from '../../store/TaskStore'
import {inject, observer} from 'mobx-react'

type TaskProps = {
    valueToFind?: string,
    TaskStore?: any
}

export const TaskComponent = observer(((props: TaskProps) => {

    const [ckTask,setCkTask]= useState(false)
    const {updateTask, deleteTask, searchTask} = useTasks()
    function filterTask(e: any) {
        setCkTask(!ckTask)
        if (!ckTask){
            void searchTask(props.valueToFind,true)
        }else{
            void searchTask(props.valueToFind,false)
        }
    }

    return (
        <div>

            <FormControlLabel control={<Checkbox/>} onChange={(e) => {
                filterTask(e)
            }}
                              checked={ckTask}
                              label="Filtrar completadas"/>
            <List
                sx={{width: '100%', bgcolor: 'background.paper'}}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" style={{color: "grey", fontSize: "small", textAlign: "center"}}
                                   id="nested-list-subheader">
                        Tareas
                    </ListSubheader>
                }
            >
                {taskStore.tasks.map((val: any) =>
                    <ListItemButton key={val.id}>
                        <ListItemText primary={val.name}
                                      style={{color: "grey", textDecorationLine: val.completed ? "line-through" : ""}}/>
                        {!val.completed ?
                            <Button
                                onClick={async () => {
                                    await updateTask(val.id, true)
                                    await searchTask()
                                }}
                                size={"small"}
                                variant="outlined" color={"success"}><Done fontSize={"small"}/></Button> : null
                        }
                        <Button
                            size={"small"}
                            onClick={async () => {
                                await deleteTask(val.id)
                                await searchTask()
                            }}
                            variant="outlined" color={"error"}>
                            <DeleteIcon fontSize={"small"}/>
                        </Button>
                    </ListItemButton>
                )}
            </List>
            <Modal/>
        </div>
    )
}))
export default inject("TaskStore")(TaskComponent)

