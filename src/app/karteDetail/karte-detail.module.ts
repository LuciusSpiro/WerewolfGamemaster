import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { KarteDetailComponent } from "./karte-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
        KarteDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class KarteDetailModule { }
