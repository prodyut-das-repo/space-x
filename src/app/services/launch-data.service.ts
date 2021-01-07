import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class LaunchService {
    launch: string;
    land: string;
    constructor(private http: HttpClient) { }
    url = 'https://api.spaceXdata.com/v3/launches?limit=100';
    getAllLaunchResults(year?: number, launch_status?: boolean, land_status?: boolean) {
        if (launch_status !== undefined) {
            this.launch = `&launch_success=${launch_status}`
        }
        else {
            this.launch = '';
        }
        if (land_status !== undefined) {
            this.land = `&land_success=${land_status}`
        }
        else { this.land = '' }
        return this.http.get(`${this.url}${this.launch}${this.land}&launch_year=${year}`);
    }
}