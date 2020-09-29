import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonComponent } from './common/common.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';

import { SalesInteractionComponent } from './sales-interaction/sales-interaction.component';
import { ManageCaseComponent } from './manage-case/manage-case.component';


@NgModule({
  declarations: [
    AppComponent,
    SalesInteractionComponent,
    CommonComponent,
    ManageCaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
   FlexLayoutModule,
   ReactiveFormsModule,
   HttpClientModule,
   FormsModule,
   MatProgressSpinnerModule,
   MatSnackBarModule,
   MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
