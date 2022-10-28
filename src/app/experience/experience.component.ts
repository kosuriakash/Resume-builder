import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() name='EXPERIENCE'
  @Input() title='Junior Assistant Engineer'
  @Input() experience='Did an internship as a junior assistant engineer in quantity surveying and billing conducted in CIDC.'
  constructor() { }

  ngOnInit(): void {
  }

}
