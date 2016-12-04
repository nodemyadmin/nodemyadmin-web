import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/common.less";

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { rootRouterConfig } from "./router/app.routes";
import { LayoutComponent } from "./pages/layout/layout.component";
import { DashboardModule } from "./pages/dashboard/dashboard.module";

@NgModule({
  declarations: [ LayoutComponent ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig),
    NgbModule.forRoot(),
    DashboardModule
  ],
  bootstrap: [ LayoutComponent ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }]
})

export class AppModule { }
