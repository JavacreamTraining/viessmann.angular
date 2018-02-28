import { Injectable } from '@angular/core';
@Injectable()
export class PeopleService {
    people: Array<Person> = new Array()
    person: Person
  constructor() {
    this.person = {
      "personId": 1,
      "lastname": "Sawitzki",
      "firstname": "Werner",
      "gender": "m",
      "height": 181
    }


}
  loadPeople():Array<Person>{
    let p: Person = new PersonImpl(1, "Sawitzki", "Rainer", "m", 183)
    let pFromJson: Person = {
      "personId": 1,
      "lastname": "Sawitzky",
      "firstname": "Klaus",
      "gender": "m",
      "height": 181
    }

    this.person = pFromJson
    this.people.push(p)
    this.people.push(pFromJson)

    return this.people
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
