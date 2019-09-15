import { Component, OnInit } from "@angular/core";
import { KartenSpeicherService } from "../kartenSpeicher/karten-speicher.service";
import { Ikarten } from "../interface/iKarten";
import { TabView } from "tns-core-modules/ui/tab-view/tab-view";
import { AppComponent } from "../app.component";

@Component({
    selector: "Overview",
    moduleId: module.id,
    templateUrl: "./overview.component.html"
})
export class OverviewComponent implements OnInit {
    karten: Array<Ikarten>;
    constructor(private kartenSpeicher: KartenSpeicherService,
        private appComponent: AppComponent) {

    }
    ngOnInit(): void {
        //this.karten = this.kartenSpeicher.getOverviewGame();
    }
}
