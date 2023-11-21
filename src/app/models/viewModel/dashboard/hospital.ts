import { Doctor } from "./doctor";

export class Hospital {
  hospitalID: number;
  hospitalName: string;
  cityID: number;
  city: string;
  doctor: Doctor[];
}
