import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DatabasesComponent } from "./databases.component";

const databasesRoutes: Routes = [
  { path: "databases", component: DatabasesComponent }
];

export const databasesRouting: ModuleWithProviders = RouterModule.forChild(databasesRoutes);
