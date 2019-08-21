import { Component, OnInit } from "@angular/core";
import { KartenSpeicherService } from "../kartenSpeicher/karten-speicher.service";
import { Ikarten } from "../interface/iKarten";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "Spiel",
    moduleId: module.id,
    templateUrl: "./spiel.component.html"
})
export class SpielComponent implements OnInit {
    karten: Array<Ikarten>;
    constructor(private kartenSpeicher: KartenSpeicherService, private page: Page) {
        this.page.addEventListener("navigatedTo", () => {
            this.karten = this.kartenSpeicher.getNextGame();
            this.karten = this.karten.filter((a) => a.position !== 0);
            this.karten.sort((a1, a2) => a1.position - a2.position); });
    }
    ngOnInit() {
        this.karten = this.kartenSpeicher.getNextGame();
        this.karten = this.karten.filter((a) => a.position !== 0);
        this.karten.sort((a1, a2) => a1.position - a2.position);
    }

    next() {
        let first = this.karten.shift();
        if (first && first.position >= 0) {
            this.karten.push(first);
        }
    }
    killPerson(karte: Ikarten) {
        karte.anzahl -=1;
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
