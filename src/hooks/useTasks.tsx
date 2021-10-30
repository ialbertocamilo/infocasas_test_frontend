import {TaskService} from "../Services/TaskService";
import taskStore from "../store/TaskStore"

export function useTasks() {


    const taskService = new TaskService


    function updateTask(id: string, completed: boolean) {
        return taskService.updateTask(id, completed)
    }

    function saveTask(name: string) {
        return taskService.saveTask(name)
    }

    function deleteTask(id: string) {
        return taskService.deleteTask(id)
    }

    function searchTask(value: string = '', completed = false) {
        return new Promise((resolve) => {
            taskService.filterTask(value, completed).then(r => {
                taskStore.setTasks(r)
                resolve(r)
            })
        })
    }

    return {saveTask,deleteTask, updateTask, searchTask}
}
