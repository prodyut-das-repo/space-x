import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-cards',
  templateUrl: './launch-cards.component.html',
  styleUrls: ['./launch-cards.component.scss']
})
export class LaunchCardsComponent implements OnInit {

  constructor() { }
  @Input() launches: Array<any>;
  @Input() showLoader: boolean;
  ngOnInit() {
  }

}
