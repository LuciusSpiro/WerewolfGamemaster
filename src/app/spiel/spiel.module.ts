import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SpielRoutingModule } from "./spiel-routing.module";
import { SpielComponent } from "./spiel.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SpielRoutingModule
    ],
    declarations: [
        SpielComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SpielModule { }
