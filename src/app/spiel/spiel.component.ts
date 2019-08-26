import { Component, OnInit } from "@angular/core";
import { KartenSpeicherService } from "../kartenSpeicher/karten-speicher.service";
import { Ikarten } from "../interface/iKarten";
import { TabView } from "tns-core-modules/ui/tab-view/tab-view";
import { AppComponent } from "../app.component";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "tns-core-modules/application";
import { Router } from "@angular/router";
import * as application from "tns-core-modules/application";

@Component({
    selector: "Spiel",
    moduleId: module.id,
    templateUrl: "./spiel.component.html"
})
export class SpielComponent implements OnInit {
    karten: Array<Ikarten>;
    runde = 1;
    constructor(private kartenSpeicher: KartenSpeicherService, private appComponent: AppComponent, private router: Router) {
        this.appComponent.tabView.nativeElement.addEventListener(TabView.selectedIndexChangedEvent, () => {
            this.karten = this.kartenSpeicher.getCurrentGame();
            this.runde = this.kartenSpeicher.getTurn();
        });
    }
    ngOnInit(): void {
        this.karten = this.kartenSpeicher.getCurrentGame();
        application.android.on(AndroidApplication.activityBackPressedEvent,
            (data: AndroidActivityBackPressedEventData) => {
                if (this.router.isActive("/(startTab:start/default//spielTab:spiel/default)", false)) {
                    data.cancel = true; // prevents default back button behavior
                    this.appComponent.tabView.nativeElement.selectedIndex = 0;
                }
            });
    }

    next(): void {
        const first = this.karten.shift();
        if (first.name === 'Dorfbewohner') {
            this.runde = this.kartenSpeicher.increaseTurn();
        }
        if (first && first.position >= 0) {
            this.karten.push(first);
        }

    }

    killPerson(karte: Ikarten): void {
        this.kartenSpeicher.killPerson(karte);
        this.karten = this.kartenSpeicher.getCurrentGame();
    }

    getAnzahl(karte: Ikarten): string {
        if (karte.anzahl > 1) {
            return "" + karte.anzahl;
        }

        return "";
    }
}
