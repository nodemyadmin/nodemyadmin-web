import { NgModule } from "@angular/core";

import { UsersComponent } from "./users.component";
import { usersRouting } from "./users.routes";

@NgModule({
  imports: [ usersRouting ],
  declarations: [ UsersComponent ]
})

export class UsersModule { };
