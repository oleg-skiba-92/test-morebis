import { employeesData } from "../mockData/employees";
import { IEmployee } from "../interfaces/IEmployee";
import { IresponseError } from "../interfaces/IresponseError";
import { IDepartment } from "../interfaces/IDepartment";
import { departmentsData } from "../mockData/departments";

export class EmployeeService {

  getEmployees(): Promise<IEmployee[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(employeesData);
      }, 1000)
    })
  }

  getEmployeeDepartments(): Promise<IDepartment[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(departmentsData);
      }, 1000)
    })
  }

  getEmployeeById(id: number): Promise<IEmployee> {
    return new Promise((resolve, reject) => {
      let employee = employeesData.find((employee) => employee.id === id);
      setTimeout(() => {
        if (employee) {
          resolve(employee);
        } else {
          reject(<IresponseError>{
            status: 404,
            message: 'Employee not found'
          })
        }
      }, 1000)
    })
  }

  createEmployee(employeeBody: IEmployee): Promise<IEmployee> {
    let _employee = {...employeeBody};
    _employee.id = Math.floor(Math.random() * 1000) + 1000;
    employeesData.push(_employee);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(_employee);
      }, 1000)
    })
  }

  editEmployee(employeeBody: IEmployee): Promise<IEmployee> {
    let _employee = {...employeeBody};
    let _employeeIdx = employeesData
      .findIndex((employee) => employee.id === employeeBody.id);

    employeesData[_employeeIdx] = {..._employee};

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(_employee);
      }, 1000)
    })
  }

  deleteEmployee(employeeId: number): Promise<string> {
    let _employeeIdx = employeesData
      .findIndex((employee) => employee.id === employeeId);

    return new Promise((resolve) => {
      setTimeout(() => {
        if (_employeeIdx !== -1) {
          employeesData.splice(_employeeIdx, 1);
        }
        resolve('ok')
      }, 1000)
    })
  }
}