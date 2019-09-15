import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(startTab:start/default//spielTab:spiel/default//overviewTab:overview/default)",
        pathMatch: "full"
    },

    {
        path: "start",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/start/start.module#StartModule",
        outlet: "startTab"
    },
    {
        path: "overview",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/overview/overview.module#OverviewModule",
        outlet: "overviewTab"
    },
    {
        path: "spiel",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/spiel/spiel.module#SpielModule",
        outlet: "spielTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
