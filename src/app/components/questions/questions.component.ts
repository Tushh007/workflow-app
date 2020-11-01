import { Component, OnInit } from '@angular/core';
import { Questions } from 'src/app/shared/models/questions';
import { DataService } from 'src/app/shared/services/data.service';

const QUESTIONS: Questions[] = [
  {questionNo: 1, question: 'Google reviews not aggregating?'},
  {questionNo: 2, question: 'Cannot respond to google reviews'},
  {questionNo: 3, question: 'Request not going out?'}
];

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  displayedColumns: string[] = ['questionNo', 'question'];
  dataSource = QUESTIONS;


  constructor(private dataService: DataService) { }

  ngOnInit(): void { }

  questionDetails(question): void {
    this.dataService.updateQuestion(JSON.stringify(question));
  }

}
