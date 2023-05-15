import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  characters: any[] = [];

  constructor(private personajesService: PersonajesService) {}

  ngOnInit() {
    this.personajesService.fetchCharacters().subscribe(
      result => {
        if (result.results && Array.isArray(result.results)) {
          this.characters = result.results;
        } else {
          console.error('API response is not as expected:', result);
        }
      },
      error => {
        console.error('Error fetching characters:', error);
      }
    );
  }
}
