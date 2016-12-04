import { NgModule } from "@angular/core";

import { SQLComponent } from "./sql.component";
import { sqlRouting } from "./sql.routes";

@NgModule({
  imports: [ sqlRouting ],
  declarations: [ SQLComponent ]
})

export class SQLModule { };
