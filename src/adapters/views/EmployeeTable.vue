<template>
  <div>
    <input v-model="search" placeholder="Search by name" />
    <select v-model="filter" @change="filterEmployees">
      <option value="">All</option>
      <option value="car">Car</option>
      <option value="bike">Bike</option>
    </select>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Area</th>
        <th>Vehicle Type</th>
        <th>Plate Number</th>
        <th>Color</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="employee in employees" :key="employee.id">
        <td>{{ employee.name }}</td>
        <td>{{ employee.area }}</td>
        <td>{{ employee.vehicle.type }}</td>
        <td>{{ employee.vehicle.plateNumber }}</td>
        <td>{{ employee.vehicle.color }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { EmployeeRepositoryImpl } from "@/infrastructure/repositories/EmployeeRepositoryImpl";
import { EmployeeService } from "@/application/services/EmployeeService";

export default {
  data() {
    return {
      employees: [],
      search: "",
      filter: "",
    };
  },
  async created() {
    const repo = new EmployeeRepositoryImpl();
    const service = new EmployeeService(repo);

    this.employees = await service.getAllEmployees();
  },
  methods: {
    filterEmployees() {
      const repo = new EmployeeRepositoryImpl();
      const service = new EmployeeService(repo);

      if (this.filter) {
        this.employees = service.filterByVehicleType(this.filter);
      } else {
        this.employees = service.getAllEmployees();
      }
    },
  },
};
</script>
