import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Questions } from 'src/app/shared/models/questions';
import { DataService } from 'src/app/shared/services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

const QUESTIONS: Questions[] = [
  { questionNo: 1, question: 'Google reviews not aggregating?' },
  { questionNo: 2, question: 'Cannot respond to google reviews' },
  { questionNo: 3, question: 'Request not going out?' }
];

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['questionNo', 'question'];
  dataSource: MatTableDataSource<Questions>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private dataService: DataService) {
    this.dataSource = new MatTableDataSource(QUESTIONS);
  }

  ngOnInit(): void {
    this.questionDetails(this.dataSource.filteredData[0]);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  questionDetails(question): void {
    this.dataService.updateQuestion(JSON.stringify(question));
  }

}
