import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { KarteDetailComponent } from "./karte-detail.component";

const routes: Routes = [
    { path: "item/:id", component: KarteDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SpielRoutingModule { }
