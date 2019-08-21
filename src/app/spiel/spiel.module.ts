import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SpielRoutingModule } from "./spiel-routing.module";
import { SpielComponent } from "./spiel.component";
import { SpielDetailComponent } from "./spiel-detail/spiel-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SpielRoutingModule
    ],
    declarations: [
        SpielComponent,
        SpielDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SpielModule { }
