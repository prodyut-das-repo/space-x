import { isPlatformBrowser } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  routeUrl: any;

  constructor(private launchService: LaunchService, @Inject(PLATFORM_ID) private _platform_id: Object, private cd: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,) {
    if (isPlatformBrowser(this._platform_id)) {
      this.yearSelected = 2014;
      let url = localStorage.getItem('url');
      console.log(url);
      if (url === null) {
        this.getData(this.yearSelected, true, true);
      }
      else {
        this.launchService.getDataByPersistedUrl(url).subscribe((results: any) => {
          this.launchData = results;
          this.showLoader = false;
          this.cd.markForCheck();
        });
      }
    }
  }

  ngOnInit() {
    for (let i = 2006; i < 2021; i++) {
      this.year.push(i);
    }
  }

  // routeParams() {
  //   this.route.url.subscribe((url: any) => {
  //     console.log(url);

  //     switch (url.length) {
  //       case 1:
  //         this.routeUrl = url[0].path;
  //         break;
  //       case 2:
  //         this.routeUrl = url[0].path + '/' + url[1].path;
  //         break;
  //       case 3:
  //         this.routeUrl = url[0].path + '/' + url[1].path + '/' + url[2].path;
  //         break;
  //       case 4:
  //         this.routeUrl = url[0].path + '/' + url[1].path + '/' + url[2].path + '/' + url[3].path;
  //         break;
  //       default:
  //         this.routeUrl = '';
  //     }
  //     console.log(url.length);
  //     if (url.length === 2) {
  //     }
  //   })
  // }

  filterOnClick(year: number) {
    this.launchStatusSelected = undefined;
    this.landStatusSelected = undefined;
    this.yearSelected = year;
    this.getData(year, undefined, undefined);
  }

  launchStatus(status: boolean) {
    if (status) {
      if (this.landStatusSelected === true) {
        this.router.navigate([], { queryParams: { launch_status: true, land_status: true } });
      }
      else if (this.landStatusSelected === false) {
        this.router.navigate([], { queryParams: { launch_status: true, land_status: false } });
      }
      else {
        this.router.navigate([], { queryParams: { launch_status: true } });
      }
    }
    else {
      if (this.landStatusSelected === true) {
        this.router.navigate([], { queryParams: { launch_status: false, land_status: true } });
      }
      else if (this.landStatusSelected === false) {
        this.router.navigate([], { queryParams: { launch_status: false, land_status: false } });
      }
      else {
        this.router.navigate([], { queryParams: { launch_status: false } });
      }
    }
    this.launchStatusSelected = status;
    this.getData(this.yearSelected, status, this.landStatusSelected);
  }

  landStatus(status: boolean) {
    if (status) {
      if (this.launchStatusSelected === true) {
        this.router.navigate([], { queryParams: { launch_status: true, land_status: true } });
      }
      else if (this.launchStatusSelected === false) {
        this.router.navigate([], { queryParams: { launch_status: false, land_status: true } });
      }
      else {
        this.router.navigate([], { queryParams: { land_status: true } });
      }
    }
    else {
      if (this.launchStatusSelected === true) {
        this.router.navigate([], { queryParams: { launch_status: true, land_status: false } });
      }
      else if (this.launchStatusSelected === false) {
        this.router.navigate([], { queryParams: { launch_status: false, land_status: false } });
      }
      else {
        this.router.navigate([], { queryParams: { land_status: false } });
      }
    }
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
