import {axiosService} from "./AxiosService";


export class TaskService {

    async fetchAllTask() {
        const {data} = await axiosService.get('/task')
        if (data) {
            return data
        }
        return null
    }

    async saveTask(name: string) {

        const {data} = await axiosService.post('/task/', {
            name
        })
        if (data) {
            return data
        }
        return null
    }

    async updateTask(id: string, completed: boolean) {

        const {data} = await axiosService.put(`/task/${id}`, {
            completed
        })
        if (data) {
            return data
        }
        return null
    }

    async filterTask(name: string='',completed=false) {
        const {data} = await axiosService.get(`/task/search`, {
            params: {
                name,
                completed:Number(completed)
            }
        })
        if (data) {
            return data
        }
        return null
    }

    async deleteTask(id: string) {
        const {data} = await axiosService.delete(`/task/${id}`)
        if (data) return data

        return null
    }


}
