import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";

import { StartComponent } from "./start.component";
import { StartDetailComponent } from "./start-detail/start-detail.component";
import { SpielComponent } from "../spiel/spiel.component";

const routes: Routes = [
    { path: "default", component: StartComponent },
    { path: "karte/:id", component: StartDetailComponent },
    {
        path: "/spiel",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/spiel/spiel.module#SpielModule",
        outlet: "spielTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class StartRoutingModule { }
