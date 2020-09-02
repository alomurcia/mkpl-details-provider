import { ROLES } from './constants/auth';
import { Component, OnInit, Input } from '@angular/core';

import { SubsidiaryService } from './services/subsidiary.service';
import { ASC, DESC } from './constants/queries';
import { tableHeaders } from './constants/constants';
import { DataPaginator } from './interfaces/paginator.interface';
import { Subsidiary, SubsidiaryListResponse } from './interfaces/subsidiaries.interface';
//import { Auth0Service } from './services/auth0.service';
import { SCOPES } from './constants/auth';

declare const Liferay: any;

@Component({
  selector: 'subsidiaries-list',
  templateUrl: 
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/mkpl-details-provider/app/subsidiaries-list.component.html'
})

export class SubsidiariesListComponent{
  subsidiaries: Subsidiary[];
  dataToPaginate: DataPaginator;
  tableInfo: Array<{ label: string; id: string; sortable: boolean }> = tableHeaders;
  orderBy = true;
  @Input() dataToSubsidiaries: SubsidiaryListResponse;
  canCreateSubsidiary = false;
  canUpdateStatus = false;
  canEdit = false;
  canViewDetail = false;

  constructor(private subsidiaryService: SubsidiaryService) { }

  ngOnInit() {
    //TODO permisos de sesión

   /*  this.authService.getProfile().subscribe(user => {
      this.authService.getScopes().subscribe(scopes => {
        this.canCreateSubsidiary = scopes.includes(SCOPES.createSubsidiary);
        this.canUpdateStatus = scopes.includes(SCOPES.updateSubsidiaryStatus);
        this.canEdit = user.role !== ROLES.backoffice && scopes.includes(SCOPES.updateSubsidiary);
        this.canViewDetail = scopes.includes(SCOPES.readSubsidiary);
      });
    }); */
    const { content, ...dataPaginator } = this.dataToSubsidiaries;
    this.subsidiaries = content;
    this.dataToPaginate = dataPaginator;
  }

  disableSubsidiary(id:any) {
    this.subsidiaryService
      .toggleSubsidiaries(id)
      .subscribe(
        ({ id: elemId, status }: { id: number, status: boolean }) =>
          (this.subsidiaries = this.subsidiaries.map(elem =>
            elem.id === elemId ? { ...elem, status } : elem
          ))
      ); 
  }

  handleOrder(id:any) {
    const orderBy = this.orderBy ? ASC : DESC;
    this.orderBy = !this.orderBy;
    /* TODO pendiente arreglar this.subsidiaryService.getSubsidiaries({ providerId: 1, order: 'id', orderBy }).subscribe(({ content }) => {
      this.subsidiaries = content;
    });*/
  }
}
