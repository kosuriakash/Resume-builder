import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-strengths',
  templateUrl: './strengths.component.html',
  styleUrls: ['./strengths.component.scss']
})
export class StrengthsComponent implements OnInit {
  @Input() name='PERSONAL STRENGTHS'
  @Input() strengths:string[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
