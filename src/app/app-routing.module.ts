import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(vorschauTab:vorschau/default//startTab:start/default//spielTab:spiel/default)",
        pathMatch: "full"
    },

    {
        path: "vorschau",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/vorschau/vorschau.module#VorschauModule",
        outlet: "vorschauTab"
    },
    {
        path: "start",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/start/start.module#StartModule",
        outlet: "startTab"
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
