import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  getParticipants(){
      return [
        {name: "Fatima Lumayag", age:21 + " years old", gender: "Female"},
        {name: "Julios Sander", age:23 + " years old", gender: "Male"},
        {name: "Alex Caluag", age:29 + " years old", gender: "Male"},
        {name: "Jose Mario Lee", age:57 + " years old", gender: "Male"},
        {name: "Angel Lumayag", age:41 + " years old", gender: "Female"},
        {name: "Devine Estillore", age:20 + " years old", gender: "Male"},
        {name: "Justine Chua", age:27 + " years old", gender: "Male"},
        {name: "Airos Boria", age:37 + " years old", gender: "Female"},
        {name: "Angelina Vistal", age:36 + " years old", gender: "Female"},
        {name: "RN Genita", age:29 + " years old", gender: "Male"},
        {name: "Juana Marie", age:22 + " years old", gender: "Female"},
        ];
  }
}
