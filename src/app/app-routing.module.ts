import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesInteractionComponent } from './sales-interaction/sales-interaction.component';
import { ManageCaseComponent } from './manage-case/manage-case.component';

const routes: Routes = [
	{ path: "salestracker/salesInteraction", component: SalesInteractionComponent },
	{ path: "salestracker/manageCase", component: ManageCaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
