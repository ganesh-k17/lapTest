import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-med-service-panel',
  templateUrl: './med-service-panel.component.html',
  styleUrls: ['./med-service-panel.component.css']
})
export class MedServicePanelComponent implements OnInit {
  @Input() Title: string;
  @Input() Text: string;
  @Input() ClassText: string;
  constructor() { }

  ngOnInit() {
  }

}
