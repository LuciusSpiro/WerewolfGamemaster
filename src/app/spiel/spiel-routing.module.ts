import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SpielComponent } from "./spiel.component";
import { KartenDetailComponent } from "../karten-detail/karten-detail.component";

const routes: Routes = [
    { path: "default", component: SpielComponent },
    { path: "karte/:id", component: KartenDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SpielRoutingModule { }
