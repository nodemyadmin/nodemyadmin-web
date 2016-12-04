import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SQLComponent } from "./sql.component";

const sqlRoutes: Routes = [
  { path: "sql", component: SQLComponent }
];

export const sqlRouting: ModuleWithProviders = RouterModule.forChild(sqlRoutes);
