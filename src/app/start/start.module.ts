import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { StartRoutingModule } from "./start-routing.module";
import { StartComponent } from "./start.component";
import { KartenDetailComponent } from "./karten-detail/karten-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        StartRoutingModule
    ],
    declarations: [
        StartComponent,
        KartenDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class StartModule { }
