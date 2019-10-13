import { Component, OnInit } from "@angular/core";
import { KartenSpeicherService } from "../kartenSpeicher/karten-speicher.service";
import { Ikarten } from "../interface/iKarten";
import { TabView } from "tns-core-modules/ui/tab-view/tab-view";
import { AppComponent } from "../app.component";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
    selector: "Overview",
    moduleId: module.id,
    templateUrl: "./overview.component.html"
})
export class OverviewComponent implements OnInit {
    karten: Array<Ikarten>;
    constructor(private kartenSpeicher: KartenSpeicherService,
        private appComponent: AppComponent) {
        this.appComponent.tabView.nativeElement.addEventListener(TabView.selectedIndexChangedEvent, () => {
            this.karten = this.kartenSpeicher.getOverviewGame();

        });

    }
    ngOnInit(): void {
        // this.karten = this.kartenSpeicher.getOverviewGame();
    }
    onBlur(event, karte: Ikarten): void {
        const textField = <TextField>event.object;

        karte.spieler = textField.text;
    }
    resetName(karte: Ikarten): void {
        karte.spieler = "";
    }
    deleteEntry(karte: Ikarten): void {
        this.karten = this.kartenSpeicher.removeKarteFromOverview(karte);
    }
}
