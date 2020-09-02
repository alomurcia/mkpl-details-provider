import { Component, OnInit } from '@angular/core';

import { ROLES } from './constants/auth';
import { SubsidiaryService } from './services/subsidiary.service';
import { EMPTY } from 'rxjs';

declare const Liferay: any;

@Component({
	templateUrl: 
		Liferay.ThemeDisplay.getPathContext() + 
		'/o/mkpl-details-provider/app/app.component.html'
})

export class AppComponent implements OnInit {
  dataToSubsidiaries: any;
  
  // TODO traer permisos desde Liferay
  canReadSubsidiaries = false;

  constructor( private subsidiaryService: SubsidiaryService ) { }

  ngOnInit() {
    // TODO Traer desde Liferay el rol
    let role = ROLES.backoffice;

    if (role === ROLES.backoffice) {
      this.dataToSubsidiaries = this.subsidiaryService.getSubsidiaries(this.getURLParameter("id"));
    } else if (role === ROLES.provider) {
      // TODO se deben cargar las sucursales  del id de proveedor del proveedor logueado
      let idProveedor = 1;
      this.dataToSubsidiaries = this.subsidiaryService.getSubsidiaries(idProveedor);
    } else {
      return EMPTY;
    }

    // TODO actualizar info desde permisos en liferay si canReadSubsidiaries
    this.canReadSubsidiaries = true;
  }
  
	// this.getURLParameter("id")
	private getURLParameter(paramName: string){
	  var pageURL = window.location.search.substring(1);
	  var variables = pageURL.split('&');
	  for (var i = 0; i < variables.length; i++) {
	    var param = variables[i].split('=');
	    if (param[0] == paramName) {
	      return param[1];
	    }
	  }
	}​
}
