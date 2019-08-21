import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BrowseComponent } from "./browse.component";
import { KartenDetailComponent } from "./karten-detail/karten-detail.component";

const routes: Routes = [
    { path: "default", component: BrowseComponent },
    { path: "item/:id", component: KartenDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BrowseRoutingModule { }
