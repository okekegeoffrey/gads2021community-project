import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UdemyService } from '../udemy.service';

@Component({
  selector: 'app-udemy-course',
  templateUrl: './udemy-course.component.html',
  styleUrls: ['./udemy-course.component.scss']
})
export class UdemyCourseComponent implements OnInit, OnDestroy {

  udemyData:any;
  navData:any;

  spinning:boolean = true;

  // previous:any;
  // next:any;

  url:any;

  // fontawesome

  title:any = 'page for udemy courses works!';

  constructor(private router: Router, private _udemyService: UdemyService) { }

  ngOnInit(): void {
    this.url = "https://www.udemy.com/api-2.0/courses/";

    this._udemyService.getCourses(this.url).subscribe(data => {console.log(data);

      const dataNew:any = data;
      this.udemyData = dataNew.results;
      this.navData = dataNew;
      // this.previous = dataNew.previous;
      // this.next = dataNew.next;
      // console.log(this.next, this.previous)

      // track the spinning animation
      if (data) {
        this.spinning = false;
      }

    });
  }

  clickNext() {
    this.spinning = true;
    this._udemyService.getCourses(this.navData.next).subscribe(data => {

      const dataNew:any = data;
      this.udemyData = dataNew.results;
      this.navData = dataNew;

      // track the spinning animation
      if (data) {
        this.spinning = false;
      }
    });
  }

  clickPrev() {
    this.spinning = true;
    this._udemyService.getCourses(this.navData.previous).subscribe(data => {

      const dataNew:any = data;
      this.udemyData = dataNew.results;
      this.navData = dataNew;

      // track the spinning animation
      if (data) {
        this.spinning = false;
      }

    });
  }

  ngOnDestroy(): void {
    this.udemyData.unsubscribe();
    this.navData.unsubscribe();
    // this.next.unsubscribe();
    // this.previous.unsubscribe();
  }


}
