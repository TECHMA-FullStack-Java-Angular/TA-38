import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
   //Declara una propiedad characters como un arreglo vacío ([]) de tipo any[]. 
   //Esta propiedad se utilizará para almacenar los personajes obtenidos del archivo JSON.
  characters: any[] = [];

  // Inyección de HttpClient en el constructor
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Llama al método para obtener los personajes al inicializar el componente
    this.fetchCharacters();
  }

  fetchCharacters() {
     // Realiza una solicitud HTTP GET al archivo JSON
    this.http.get<any>('assets/database.json').subscribe(data => {
      this.characters = data.characters;
    });
  }
}


