import { LaunchService } from "./launch-data.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

describe('DataService', () => {
    let service: LaunchService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule],
            providers: [LaunchService]
        });
        service = TestBed.get(LaunchService);
    });
    it('should create', () => {
        expect(service).toBeTruthy();
    });
    it('makes call to getAllLaunchResults ', () => {
        service.getAllLaunchResults();
    });
    it('makes call to getDataByPersistedUrl ', () => {
        service.getDataByPersistedUrl('s');
    });
});