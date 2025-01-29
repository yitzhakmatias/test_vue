export class EmployeeService {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    getAllEmployees() {
        return this.employeeRepository.getEmployees();
    }

    filterByVehicleType(type) {
        return this.employeeRepository.getEmployees().filter(e => e.vehicle.type === type);
    }

    searchByName(name) {
        return this.employeeRepository.getEmployeeByName(name);
    }
}
