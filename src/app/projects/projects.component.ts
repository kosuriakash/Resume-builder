import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() name='PROJECTS'
  @Input() projects:any={}
  constructor() { }

  ngOnInit(): void {
  }

}
