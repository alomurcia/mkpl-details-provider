import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ProviderGeneralData,
  ProviderDetails,
  ProviderContactData
} from './interfaces/provider.interface';
import { ROUTES } from './constants/routes';
import { GENERAL_PROFILE_FIELDS, CONTACT_PROFILE_FIELDS } from './constants/constants';
import { SCOPES, ROLES } from './constants/auth';
import { combineLatest } from 'rxjs';

declare const Liferay: any;

@Component({
  selector: 'profile-info',
  templateUrl: 
    Liferay.ThemeDisplay.getPathContext() + 
    '/o/mkpl-details-provider/app/profile-info.component.html'
})
export class ProfileInfoComponent implements OnInit {
  providerDetails: ProviderDetails;
  generalFields: any;
  contactFields = CONTACT_PROFILE_FIELDS;
  objectKeys = Object.keys;
  generalData: ProviderGeneralData;
  contactData: ProviderContactData;
  providersRoute = ROUTES.providers;
  canEdit = false;
  @Input() roleProfile: string;

  providerId: string;

  constructor( ) {}

  ngOnInit() {
    this.providerId = this.getURLParameter("id");

    /* TODO llamar el servicio http://localhost:8081/api/provider/:idProvider
    con la respuesta llenar las cosas de abajo
    /*
    .subscribe(
      (user) => {
        console.log('**** data: ', data);
        this.generalData = {
          name: this.roleProfile === ROLES.subsidiary ? user.alias : user.name,
          nit: user.nit,
          country: user.location.city.region.country.name,
          city: user.location.city.name,
          address: user.location.address
        };
        this.contactData = {
          name: this.roleProfile === ROLES.subsidiary ? user.name : user.contactName,
          phone: user.phone,
          email: user.email,
          adminEmail: user.adminUser.email
        };
        this.canEdit =
          this.roleProfile === ROLES.provider
            ? scopes.includes(SCOPES.updateProvider)
            : scopes.includes(SCOPES.updateSubsidiary);
        this.generalFields = GENERAL_PROFILE_FIELDS[this.roleProfile];
      }
    );
    */
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
