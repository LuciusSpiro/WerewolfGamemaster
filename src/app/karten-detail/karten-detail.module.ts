import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { KartenDetailComponent } from "./karten-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
       KartenDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        KartenDetailComponent
    ]
})
export class KartenDetailModule { }
