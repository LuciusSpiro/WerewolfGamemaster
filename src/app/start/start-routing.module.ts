import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";

import { StartComponent } from "./start.component";
import { KartenDetailComponent } from "../karten-detail/karten-detail.component";

const routes: Routes = [
    { path: "default", component: StartComponent },
    { path: "karte/:id", component: KartenDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class StartRoutingModule { }
