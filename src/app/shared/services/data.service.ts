import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private questionSource = new BehaviorSubject<''>('');
  public question$ = this.questionSource.asObservable();

  constructor() { }

  updateQuestion(question): void {
    this.questionSource.next(JSON.parse(question));
  }
}
