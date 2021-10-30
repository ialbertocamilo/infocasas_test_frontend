import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useTasks} from "../../hooks/useTasks";

export default function Modal() {
    const [open, setOpen] = React.useState(false);

    const [task, setTask] = useState('')
    const {saveTask, searchTask} = useTasks()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSave = async () => {
        await saveTask(task)
        void searchTask()
        setTask("")
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Crear tarea
            </Button>
            <Dialog open={open}>
                <DialogTitle>Crear tarea</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Tarea"
                        type="email"
                        fullWidth
                        value={task}
                        onChange={(e) => {
                            setTask(e.target.value)
                        }}
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleSave}>Guardar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
