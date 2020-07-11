import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperationListComponent } from './components/operation-list/operation-list.component';
import { OperationFormComponent } from './components/operation-form/operation-form.component';
import { HttpClientModule } from '@angular/common/http';
import { OperationServiceService } from './service/operation-service.service';

@NgModule({
  declarations: [
    AppComponent,
    OperationListComponent,
    OperationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ OperationServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
