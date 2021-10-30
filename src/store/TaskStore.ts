import {action, makeAutoObservable, observable} from "mobx";
import {observer} from "mobx-react";

class TaskStore {
    @observable
    tasks = []

    constructor() {
        makeAutoObservable(this)
    }
    @action
    getTasks = () => {
        return this.tasks
    }

    @action
    setTasks = (value: any) => {
        this.tasks = value
    }
}

const taskStore = new TaskStore()
export default taskStore
