import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/common.less";

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { rootRouterConfig } from "./router/app.routes";
import { LayoutComponent } from "./pages/layout/layout.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { DashboardModule } from "./pages/dashboard/dashboard.module";
import { DatabasesModule } from "./pages/databases/databases.module";
import { SignInModule } from "./pages/signin/signin.module";
import { SQLModule } from "./pages/sql/sql.module";
import { TablesModule } from "./pages/tables/tables.module";
import { UsersModule } from "./pages/users/users.module";

@NgModule({
  declarations: [ LayoutComponent, HeaderComponent, FooterComponent ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig),
    NgbModule.forRoot(),
    DashboardModule,
    DatabasesModule,
    SignInModule,
    SQLModule,
    TablesModule,
    UsersModule
  ],
  bootstrap: [ LayoutComponent ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }]
})

export class AppModule { }
