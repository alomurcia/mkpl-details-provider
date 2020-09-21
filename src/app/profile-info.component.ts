import { Component, OnInit, Input } from '@angular/core';
import {
  ProviderGeneralData,
  ProviderDetails,
  ProviderContactData
} from './interfaces/provider.interface';
import { GENERAL_PROFILE_FIELDS, CONTACT_PROFILE_FIELDS } from './constants/profile-info-constants';
import { ROLES } from './constants/auth';
import { ProviderService } from './services/provider.service';

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
  canEdit = false;
  @Input() roleProfile: string;

  providerId: string;

  constructor(private providerService: ProviderService) { }

  ngOnInit() {
    this.providerId = this.getURLParameter("id");

    this.providerService.getProviderProfile(this.providerId).subscribe(user =>{
      this.generalData = {
        /* TODO se cambió user.alias a user.name
        name: this.roleProfile === ROLES.subsidiary ? user.alias : user.name, */
        name: user.name,
        nit: user.nit,
        country: user.location.city.region.country.name,
        city: user.location.city.name,
        address: user.location.address
      };

      this.contactData = {
        name: this.roleProfile === ROLES.subsidiary ? user.name : user.contact_name,
        phone: user.phone,
        email: user.email,
        adminEmail: user.admin_user.email
      };
      
      // TODO traer permisos desde liferay
      // canEdit es true si (rol es provider && tiene permiso de updateProvider) || (tiene permiso de updateSubsidiary)
      this.canEdit = true;
      this.generalFields = GENERAL_PROFILE_FIELDS[this.roleProfile];
    });
  }

  lastItem(index: number, object: any) {
    return index === this.objectKeys(object).length - 1;
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
