import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() name='EDUCATION'
  @Input() education:any={}
  constructor() { }

  ngOnInit(): void {
  }

}
