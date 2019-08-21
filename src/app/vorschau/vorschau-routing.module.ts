import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { VorschauComponent } from "./vorschau.component";
import { VorschauDetailComponent } from "./vorschau-detail/vorschau-detail.component";

const routes: Routes = [
    { path: "default", component: VorschauComponent },
    { path: "karte/:id", component: VorschauDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class VorschauRoutingModule { }
