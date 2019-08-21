import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { VorschauRoutingModule } from "./vorschau-routing.module";
import { VorschauComponent } from "./vorschau.component";
import { ItemDetailComponent } from "../item-detail/item-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        VorschauRoutingModule
    ],
    declarations: [
        VorschauComponent,
        ItemDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class VorschauModule { }
