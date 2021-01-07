import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { LaunchService } from '../services/launch-data.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss']
})
export class LaunchListComponent implements OnInit {
  launchData: Array<any>;
  year = [];
  showLoader = false;
  yearSelected: number;
  launchStatusSelected = undefined;
  landStatusSelected = undefined;

  constructor(private launchService: LaunchService, @Inject(PLATFORM_ID) private _platform_id: Object, private cd: ChangeDetectorRef) {
    if (isPlatformBrowser(this._platform_id)) {
      this.yearSelected = 2014;
      this.getData(this.yearSelected, true, true);
    }
  }

  ngOnInit() {
    for (let i = 2006; i < 2021; i++) {
      this.year.push(i);
    }
  }

  filterOnClick(year: number) {
    this.yearSelected = year;
    this.getData(year, undefined, undefined);
  }

  launchStatus(status: boolean) {
    this.launchStatusSelected = status;
    this.getData(this.yearSelected, status, this.landStatusSelected);
  }
  landStatus(status: boolean) {
    this.landStatusSelected = status;
    this.getData(this.yearSelected, this.launchStatusSelected, status);
  }
  getData(year?: number, launch_status?: boolean, land_status?: boolean) {
    this.showLoader = true;
    this.launchService.getAllLaunchResults(year, launch_status, land_status).subscribe((results: any) => {
      this.launchData = results;
      this.showLoader = false;
      this.cd.markForCheck();
    });
  }
}
