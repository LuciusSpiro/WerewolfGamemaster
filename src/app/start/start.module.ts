import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { StartRoutingModule } from "./start-routing.module";
import { StartComponent } from "./start.component";
import { StartDetailComponent } from "./start-detail/start-detail.component";
import { SpielComponent } from "../spiel/spiel.component";
import { SpielModule } from "../spiel/spiel.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        StartRoutingModule
    ],
    declarations: [
        StartComponent,
        StartDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class StartModule { }
