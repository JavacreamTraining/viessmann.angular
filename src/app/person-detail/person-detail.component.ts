import { Component, OnInit, Input } from '@angular/core';
import {Person} from '../people.service'
@Component({
  selector: 'person-detail-component',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  @Input() the_person: Person
  constructor() {
    //this.the_person = {personId: 42, lastname: "Sawitzki", firstname: "Helmuth", height: 185, gender: "m"}
 }
  ngOnInit() {
  }

}
