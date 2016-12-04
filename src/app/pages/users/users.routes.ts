import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersComponent } from "./users.component";

const usersRoutes: Routes = [
  { path: "users", component: UsersComponent }
];

export const usersRouting: ModuleWithProviders = RouterModule.forChild(usersRoutes);
