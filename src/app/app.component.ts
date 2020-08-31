import { Component, OnInit } from '@angular/core';

import { ROUTES } from './constants/routes';
import { ActivatedRoute } from '@angular/router';
import { ROLES, SCOPES } from './constants/auth';
import { Location } from '@angular/common';
//import { Auth0Service } from 'src/app/services/auth0.service';

declare const Liferay: any;

@Component({
	templateUrl: 
		Liferay.ThemeDisplay.getPathContext() + 
		'/o/mkpl-details-provider/app/app.component.html'
})

export class AppComponent implements OnInit {
  //providersRoute = ROUTES.providers;
  dataToSubsidiaries: any;
  //ROLES = ROLES;
  //canReadSubsidiaries = false;

  constructor( /* private route: ActivatedRoute *//*, private location: Location */) { }

  ngOnInit() {
    console.log('123123');
      /*  this.route.data.subscribe(data => {
        console.log(this.route.snapshot.params.id);
        console.log('123123');
      
    });   */
    /*this.authService.getScopes().subscribe(scopes => {
      this.canReadSubsidiaries = scopes.includes(SCOPES.readSubsidiaries);
    })*/
//this.dataToSubsidiaries = data.subsidiaries;
  }

  /* goToBack() {
    this.location.back();
  } */
}
