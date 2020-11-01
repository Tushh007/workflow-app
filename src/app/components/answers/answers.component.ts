import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

import { Subscription } from 'rxjs';
import { Questions } from 'src/app/shared/models/questions';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit, OnDestroy {

  question: any;
  private questionRef: Subscription = null;

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.questionRef = this.dataService.question$.subscribe((question) => {
      this.question = question;
      console.log(this.question)
    });
  }

  ngOnDestroy(): void {
    this.questionRef.unsubscribe();
  }

}
