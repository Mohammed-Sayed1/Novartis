import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hospital } from 'app/models/viewModel/dashboard/hospital';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

const url: string = environment.apiUrl + '/Hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {

  constructor(private _http: HttpClient) { }

  gitHospitals(): Observable<Hospital[]> {
    return this._http.get<Hospital[]>(url + '/ListHospitalFullInfo')
  }
}
