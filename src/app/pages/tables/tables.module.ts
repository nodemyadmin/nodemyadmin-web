import { NgModule } from "@angular/core";

import { TablesComponent } from "./tables.component";
import { tablesRouting } from "./tables.routes";

@NgModule({
  imports: [ tablesRouting ],
  declarations: [ TablesComponent ]
})

export class TablesModule { };
