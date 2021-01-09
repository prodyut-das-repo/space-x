import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-cards',
  templateUrl: './launch-cards.component.html',
  styleUrls: ['./launch-cards.component.scss']
})
export class LaunchCardsComponent implements OnInit {

  constructor() { }
  //Inputs from parent
  @Input() launches: Array<any> =[];
  @Input() showLoader: boolean;

  /**
   * on init
   */
  ngOnInit() {
  }

}
