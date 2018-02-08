import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doctorcontet',
  templateUrl: './doctorcontet.component.html',
  styleUrls: ['./doctorcontet.component.css']
})
export class DoctorcontetComponent implements OnInit {
   @Input() Name: string;
   @Input() Title: string;
   @Input() imagePath: string;
  constructor() { }

  ngOnInit() {
  }

}
