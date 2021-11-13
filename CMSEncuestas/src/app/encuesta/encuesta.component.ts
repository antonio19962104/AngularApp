import { Component, OnInit } from '@angular/core';
import { IEncuesta } from "src/app/Models/IEncuesta";
//https://www.queopinas.com/registration/chat
@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  encuestaList: Array<IEncuesta> = [
    {
      id: 1,
      name: "Clima Laboral",
      description: "Encuesta de clima laboral",
      plantilla: {
        id: 1,
        name: "Plantilla Clima Laboral"
      }
    },
    {
      id: 2,
      name: "DNC 2021",
      description: "Encuesta de diagnóstico de necesidades",
      plantilla: {
        id: 2,
        name: "Plantilla DNC2021",
      }
    },
    {
      id: 3,
      name: "Cresta",
      description: "Encuesta para Cresta del Valle",
      plantilla: {
        id: 2,
        name: "Plantilla Cresta",
      }
    },
    {
      id: 4,
      name: "Elegantes",
      description: "Encuesta para Elegantes Pachuca",
      plantilla: {
        id: 2,
        name: "Plantilla Elegantes",
      }
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
