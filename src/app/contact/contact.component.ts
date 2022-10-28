import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() name='CONTACT'
  @Input() contact='+91-7981804398'
  @Input() email='kosuriakash3605@gmail.com'
  @Input() location='Vijayawada, Andhra Pradesh'
  constructor() { }

  ngOnInit(): void {
  }

}
