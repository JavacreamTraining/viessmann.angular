import { Component, OnInit } from '@angular/core';
import {PeopleService, Person} from '../people.service'

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  person: Person
  people: Array<Person>
  //peopleService: PeopleService
  constructor(readonly peopleService :PeopleService) {
    this.person = peopleService.person
  }

  ngOnInit() {
  }

  loadData(){
    this.people = this.peopleService.loadPeople()

  }

}
