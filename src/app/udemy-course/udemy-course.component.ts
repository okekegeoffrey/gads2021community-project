import { Component, OnInit } from '@angular/core';
import { UdemyService } from '../udemy.service';

@Component({
  selector: 'app-udemy-course',
  templateUrl: './udemy-course.component.html',
  styleUrls: ['./udemy-course.component.scss']
})
export class UdemyCourseComponent implements OnInit {

  udemyData:any;
  navData:any;

  // fontawesome

  title:any = 'page for udemy courses works!';

  constructor(private _udemyService: UdemyService) { }

  ngOnInit(): void {
    this._udemyService.getCourses().subscribe(data => {console.log(data);
      const dataNew:any = data;
      this.udemyData = dataNew.results});
  }

  ngOnDestroy(): void {
    this.udemyData.unsubscribe();
  }

}
