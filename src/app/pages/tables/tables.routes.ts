import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TablesComponent } from "./tables.component";

const tablesRoutes: Routes = [
  { path: "tables", component: TablesComponent }
];

export const tablesRouting: ModuleWithProviders = RouterModule.forChild(tablesRoutes);
