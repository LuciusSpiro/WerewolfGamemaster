import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { SpielModule } from "../spiel/spiel.module";
import { StartModule } from "../start/start.module";
import { KartenDetailComponent } from "../karten-detail/karten-detail.component";

@NgModule({
  declarations: [
    KartenDetailComponent
  ],
  imports: [
    SpielModule,
    StartModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CoreModule { }
