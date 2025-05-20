// edit-person.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html'
})
export class EditPersonComponent implements OnInit {
  person: any = { name: '', email: '' };
  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.personService.getPerson(this.id).subscribe(data => {
      this.person = data;
    });
  }

  updatePerson() {
    this.personService.updatePerson(this.id, this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}