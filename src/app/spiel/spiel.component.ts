import { Component, OnInit } from "@angular/core";
import { KartenSpeicherService } from "../kartenSpeicher/karten-speicher.service";
import { Ikarten } from "../interface/iKarten";
import { Page } from "tns-core-modules/ui/page/page";
import { TabView } from "tns-core-modules/ui/tab-view/tab-view";
import { AppComponent } from "../app.component";

@Component({
    selector: "Spiel",
    moduleId: module.id,
    templateUrl: "./spiel.component.html"
})
export class SpielComponent implements OnInit {
    karten: Array<Ikarten>;
    constructor(private kartenSpeicher: KartenSpeicherService, private page: Page, private appComponent: AppComponent) {
        this.appComponent.tabView.nativeElement.addEventListener(TabView.selectedIndexChangedEvent, () => {
            this.karten = this.kartenSpeicher.getCurrentGame();
        });
    }
    ngOnInit() {
        this.karten = this.kartenSpeicher.getCurrentGame();
    }

    next() {
        const first = this.karten.shift();
        if (first && first.position >= 0) {
            this.karten.push(first);
        }
    }

    killPerson(karte: Ikarten) {
        karte.anzahl -= 1;
        if (karte.anzahl <= 0) {
            this.karten = this.karten.filter((item) => {
                return item.anzahl !== 0;
            });
        }
    }
    
    getAnzahl(karte: Ikarten): string {
        if (karte.anzahl > 1) {
            return "" + karte.anzahl;
        }

        return "";
    }
}
