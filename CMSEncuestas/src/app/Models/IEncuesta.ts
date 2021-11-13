import { IPlantilla } from "./IPlantilla";

export interface IEncuesta{
    id: number,
    name: string,
    description: string,
    plantilla: IPlantilla
}