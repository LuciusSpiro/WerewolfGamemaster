import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SpielComponent } from "./spiel.component";
import { SpielDetailComponent } from "./spiel-detail/spiel-detail.component";

const routes: Routes = [
    { path: "default", component: SpielComponent },
    { path: "karte/:id", component: SpielDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SpielRoutingModule { }
