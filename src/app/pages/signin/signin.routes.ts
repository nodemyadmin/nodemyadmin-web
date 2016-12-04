import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SignInComponent } from "./signin.component";

const signinRoutes: Routes = [
  { path: "signin", component: SignInComponent }
];

export const signInRouting: ModuleWithProviders = RouterModule.forChild(signinRoutes);
