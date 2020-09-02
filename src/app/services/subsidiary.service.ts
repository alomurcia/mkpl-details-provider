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

  getSubsidiaries(providerId: any, order = 'id', orderBy = 'ascending'): any {
    const params = new HttpParams().set('limit', '10').set('page', '0').set('order', order)
      .set('order_by', orderBy).set('provider_id', providerId.toString());
    
    this.http.get<any>(`http://localhost:8081/api/subsidiary`, { params })
    .subscribe( data => {
      return data; });
  }
  
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
