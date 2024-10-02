import HttpClient from "./HttpClient";

import { TodoGoal, TodoTask } from "../models";

class ApiClientService {
    httpClient = new HttpClient("http://localhost:5143/");

    // region Tasks
    async getAllTasks() {
        const data = await this.httpClient.get("tasks");
        if (data == null) return [];
        return data.map(t => TodoTask.fromJSON(t));
    }

    async getTaskById(id) {
        const data = await this.httpClient.get(`tasks/${id}`);
        if (data == null) throw new Error("404 Not Found");
        return TodoTask.fromJSON(data);
    }

    async getPendingTasks() {
        const data = await this.httpClient.get("tasks/GetPendings");
        if (data == null) return [];
        return data.map(t => TodoTask.fromJSON(t));
    }

    async getCompletedTasks() {
        const data = await this.httpClient.get("tasks/GetCompleteds");
        if (data == null) return [];
        return data.map(t => TodoTask.fromJSON(t));
    }

    async createTask(task) {
        const data = await this.httpClient.post("tasks", task);
        if (data == null) throw new Error("409 Conflict");
        return TodoTask.fromJSON(data);
    }

    async updateTask(task) {
        const data = await this.httpClient.put("tasks", task);
        if (data == null) throw new Error("404 Not Found");
        return TodoTask.fromJSON(data);
    }

    async setTaskCompleted(taskId) {
        const data = await this.httpClient.put(`tasks/SetCompleted`, { id: taskId });
        if (data == null) throw new Error("404 Not Found");
        return TodoTask.fromJSON(data);
    }

    async deleteTask(id) {
        const response = await this.httpClient.delete(`tasks/${id}`);
        if (response.status === 204) return;
        if (response.status === 404) throw new Error("404 Not Found");
        if (response.status === 409) throw new Error("409 Conflict");
    }


    // region Goals
    async getAllGoals() {
        const data = await this.httpClient.get("goals");
        if (data == null) return [];
        return data.map(g => TodoGoal.fromJSON(g));
    }

    async getAllGoalsWithTasks() {
        const data = await this.httpClient.get("goals/GetAllWithTasks");
        if (data == null) return [];
        return data.map(g => TodoGoal.fromJSON(g));
    }

    async getGoalById(id) {
        const data = await this.httpClient.get(`goals/${id}`);
        if (data == null) throw new Error("404 Not Found");
        return TodoGoal.fromJSON(data);
    }

    async getGoalByIdWithTasks(id) {
        const data = await this.httpClient.get(`goals/GetByIDWithTasks/${id}`);
        if (data == null) throw new Error("404 Not Found");
        return TodoGoal.fromJSON(data);
    }

    async getPendingGoals() {
        const data = await this.httpClient.get("goals/GetPendings");
        if (data == null) return [];
        return data.map(g => TodoGoal.fromJSON(g));
    }

    async getCompletedGoals() {
        const data = await this.httpClient.get("goals/GetCompleteds");
        if (data == null) return [];
        return data.map(g => TodoGoal.fromJSON(g));
    }

    async createGoal(goal) {
        const data = await this.httpClient.post("goals", goal);
        if (data == null) throw new Error("409 Conflict");
        return TodoGoal.fromJSON(data);
    }

    async updateGoal(goal) {
        const data = await this.httpClient.put("goals", goal);
        if (data == null) throw new Error("404 Not Found");
        return TodoGoal.fromJSON(data);
    }

    async addTaskToGoal(goalId, taskId) {
        const data = await this.httpClient.patch(`goals/AddTask?goalID=${goalId}&taskID=${taskId}`);
        if (data == null) throw new Error("404 Not Found");
        return TodoGoal.fromJSON(data);
    }

    async removeTaskToGoal(goalId, taskId) {
        const data = await this.httpClient.patch(`goals/RemoveTask?goalID=${goalId}&taskID=${taskId}`);
        if (data == null) throw new Error("404 Not Found");
        return TodoGoal.fromJSON(data);
    }

    async deleteGoal(id) {
        const response = await this.httpClient.delete(`goals/${id}`);
        if (response.status === 204) return;
        if (response.status === 404) throw new Error("404 Not Found");
        if (response.status === 409) throw new Error("409 Conflict");
    }
}

export default ApiClientService;