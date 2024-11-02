import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPAgeComponent {

    constructor( private dbzService: DbzService){

    }

    get characters(): Character[]{
        // Lo normal si viniera base de datos
        //return this.dbzService.characters;
        return [...this.dbzService.characters]
        // una copia.
    }

    onDeleteCharacter(id:string): void {
        this.dbzService.onDeleteCharacter(id);
    }

    onNewCharacter( character: Character):void{
        this.dbzService.onNewCharacter(character);
    }
    
}