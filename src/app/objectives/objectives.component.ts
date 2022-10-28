import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.scss']
})
export class ObjectivesComponent implements OnInit {
  @Input() name='CAREER OBJECTIVE'
  @Input() objective='An excellent academic record, ability to understand and test software, working knowledge of Azure, and a strong understanding of core internet technologies. I seek to work as a System Engineer to further my knowledge in the IT domain and utilize my skills.'
  constructor() { }

  ngOnInit(): void {
  }

}
