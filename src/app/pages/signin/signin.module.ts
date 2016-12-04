import { NgModule } from "@angular/core";

import { SignInComponent } from "./signin.component";
import { signInRouting } from "./signin.routes";

@NgModule({
  imports: [ signInRouting ],
  declarations: [ SignInComponent ]
})

export class SignInModule { };
