import { IDepartment } from "./IDepartment";

export interface IEmployee {
  id?: number;
  fullName: string;
  department: IDepartment;
  notes?: string;
}