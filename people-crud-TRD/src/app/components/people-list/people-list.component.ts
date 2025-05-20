// people-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html'
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople() {
    this.personService.getPeople().subscribe(data => {
      this.people = data;
    });
  }

  deletePerson(id: string) {
    if (confirm('Are you sure you want to delete this person?')) {
      this.personService.deletePerson(id).subscribe(() => {
        this.loadPeople();
      });
    }
  }

  editPerson(id: string) {
    this.router.navigate(['/edit', id]);
  }
}