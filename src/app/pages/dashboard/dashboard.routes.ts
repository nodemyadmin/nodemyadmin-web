import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";

const dashboardRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent }
];

const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes)

export default dashboardRouting;
