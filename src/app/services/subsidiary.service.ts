import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

//import { environment } from 'src/environments/environment';
import { SubsidiaryRequestParams, SubsidiaryListResponse, SubsidiaryDetail, Subsidiary } from '../interfaces/subsidiaries.interface';
import { Observable } from 'rxjs';
import { createPageHttp } from '../utils/request';

@Injectable({
  providedIn: 'root'
})
export class SubsidiaryService {

  constructor(private http: HttpClient) { }

  getSubsidiaries({ providerId, order, orderBy }: SubsidiaryRequestParams): Observable<SubsidiaryListResponse> {
    console.log('123123123');
    const params = createPageHttp({ order, orderBy }).set('provider_id', providerId.toString());
     return this.http.get<SubsidiaryListResponse>
      (`http://localhost:8081/api/subsidiary`, { params }); 
  }
//TODO
  toggleSubsidiaries(id: string) {
    return this.http.put(`http://localhost:8081/api/subsidiary/active/id=2`, {});
  }

  getSubsidiary(id: string): Observable<SubsidiaryDetail> {
    return this.http.get<SubsidiaryDetail>(`http://localhost:8081/api/subsidiary/${id}`);
    return;
  }

  updateSubsidiary(subsidiary:any, cityId: string, providerId: string) {
    const params = new HttpParams().set('city_id', cityId).set('provider_id', providerId);
    return this.http.put(`http://localhost:8081/api/subsidiary`, subsidiary, { params });
  }

  createSubsidiary(subsidiary:any, cityId: string, providerId: string) {
    const params = new HttpParams().set('city_id', cityId).set('provider_id', providerId);
    return this.http.post(`http://localhost:8081/api/subsidiary`, subsidiary, { params });
  }
}
