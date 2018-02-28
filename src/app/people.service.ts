import { Injectable } from '@angular/core';
@Injectable()
export class PeopleService {
    person: Person
  constructor() {
    let p: Person = new PersonImpl(1, "Sawitzki", "Rainer", "m", 183)
    let pFromJson: Person = {
      "personId": 1,
      "lastname": "Sawitzky",
      "firstname": "Klaus",
      "gender": "m",
      "height": 181
    }
    this.person = pFromJson
    setTimeout(() => this.person.lastname = "Changed", 3000)

}
}
class PersonImpl implements Person{
  personId: number
  firstname: string
  lastname: string
  gender: string
  height: number
  constructor(personId: number, lastname: string, firstname: string, gender:string, height:number){
    this.personId = personId
    this.firstname = firstname
    this.lastname = lastname
    this.gender = gender
    this.height = height
  }
}
export interface Person{
  personId: number
  firstname: string
  lastname: string
  gender: string
  height: number
}
