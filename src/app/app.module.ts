import { NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardDescriptionComponent } from './card-description.component';
import { CardFieldComponent } from './card-field.component';
/* import { DynamicLoader } from './dynamic.loader'; */
import { ProfileInfoComponent } from './profile-info.component';
import { SubsidiariesListComponent } from './subsidiaries-list.component';
import { ShortLargeStringsPipe } from '../app/pipes/short-large-strings.pipe';



@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule
	],
	declarations: [
		AppComponent,
		 CardDescriptionComponent,
		CardFieldComponent,
		//DynamicLoader,
		ProfileInfoComponent,
		SubsidiariesListComponent,
		ShortLargeStringsPipe
	],
    exports: [],
	entryComponents: [AppComponent],
	bootstrap: [], // Don't bootstrap any component statically (see ngDoBootstrap() below)
	providers: [
		CurrencyPipe,
		ShortLargeStringsPipe
	],
})
export class AppModule {
	// Avoid bootstraping any component statically because we need to attach to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).
	ngDoBootstrap() {}
}
