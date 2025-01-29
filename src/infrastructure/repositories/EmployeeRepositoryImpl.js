import axios from "axios";
import { EmployeeRepository } from "@/domain/repositories/EmployeeRepository";

const API_URL = "http://localhost:3000/employees";

export class EmployeeRepositoryImpl extends EmployeeRepository {
    async getEmployees() {
        const response = await axios.get(API_URL);
        return response.data;
    }

    async getEmployeeByName(name) {
        const response = await axios.get(`${API_URL}?name=${name}`);
        return response.data;
    }

    async addEmployee(employee) {
        return await axios.post(API_URL, employee);
    }

    async updateEmployee(employeeId, employee) {
        return await axios.put(`${API_URL}/${employeeId}`, employee);
    }

    async deleteEmployee(employeeId) {
        return await axios.delete(`${API_URL}/${employeeId}`);
    }
}
