import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { VorschauRoutingModule } from "./vorschau-routing.module";
import { VorschauComponent } from "./vorschau.component";
import { VorschauDetailComponent } from "./vorschau-detail/vorschau-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        VorschauRoutingModule
    ],
    declarations: [
        VorschauComponent,
        VorschauDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class VorschauModule { }
