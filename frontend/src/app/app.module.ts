import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { FormsModule } from '@angular/forms';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import {MatSelectModule} from '@angular/material/select';
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrandListComponent } from './components/brand-list/brand-list.component';


@NgModule({
  declarations: [AppComponent, BrandListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
