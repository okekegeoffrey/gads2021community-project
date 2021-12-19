import { Component, OnInit } from '@angular/core';
import { UdemyService } from '../udemy.service';

@Component({
  selector: 'app-udemy-course',
  templateUrl: './udemy-course.component.html',
  styleUrls: ['./udemy-course.component.scss']
})
export class UdemyCourseComponent implements OnInit {

  title:any = 'page for udemy courses works!';

  constructor(private _udemyService: UdemyService) { }

  ngOnInit(): void {
    this._udemyService.getCourses().subscribe(data => console.log(JSON.stringify(data)));
  }

}
