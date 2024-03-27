import { Injectable } from '@nestjs/common';
import { Person } from './person/person';

@Injectable()
export class PeopleService {
  people: Person[] = [{ id: 1, name: 'Matheus' }];

  list(): Person[] {
    return this.people;
  }

  findById(id: number): Person {
    return this.people.find((person) => {
      return person.id == id;
    });
  }

  save(peopleBody: Person): Person {
    this.people.push(peopleBody);
    return peopleBody;
  }
}
