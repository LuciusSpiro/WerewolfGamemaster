import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { StartComponent } from "./start.component";
import { StartDetailComponent } from "./start-detail/start-detail.component";

const routes: Routes = [
    { path: "default", component: StartComponent },
    { path: "karte/:id", component: StartDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class StartRoutingModule { }
