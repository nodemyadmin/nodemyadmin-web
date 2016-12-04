import { NgModule } from "@angular/core";

import { DatabasesComponent } from "./databases.component";
import { databasesRouting } from "./databases.routes";

@NgModule({
  imports: [ databasesRouting ],
  declarations: [ DatabasesComponent ]
})

export class DatabasesModule { };
