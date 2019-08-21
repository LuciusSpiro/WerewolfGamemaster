import { Component, OnInit } from "@angular/core";
import { KartenSpeicherService } from "../kartenSpeicher/karten-speicher.service";
import { EventData } from "tns-core-modules/data/observable";
import { Ikarten } from "../interface/iKarten";
import { valueProperty } from "tns-core-modules/ui/slider/slider";
import { Router } from "@angular/router";
import { TabView } from "tns-core-modules/ui/tab-view/tab-view";
import { AppComponent } from "../app.component";

@Component({
    selector: "Start",
    moduleId: module.id,
    templateUrl: "./start.component.html"
})
export class StartComponent implements OnInit {
    cards: Array<Ikarten>;
    anzahlWerwolf: number;
    anzahlDorfbewohner: number;
    constructor(private kartenSpeicher: KartenSpeicherService, private appComponent: AppComponent) {
        
    }
    ngOnInit(): void {
        this.cards = this.kartenSpeicher.getAllCards();
        this.anzahlDorfbewohner = 0;
        this.anzahlWerwolf = 0;

    }

    tapPlus(args: EventData) {
        
        const card = args.object.get("id");

        if (card === "DorfbewohnerPlus") {
            this.kartenSpeicher.addKarte("Dorfbewohner");
            this.anzahlDorfbewohner++;
        } else {
            this.kartenSpeicher.addKarte("Werwolf");
            this.anzahlWerwolf++;
        }
    }

    tapMinus(args: EventData) {
        const card = args.object.get("id");

        if (card === "DorfbewohnerMinus") {
            if (this.anzahlDorfbewohner > 0) {
                this.anzahlDorfbewohner--;
            }
        } else {
            if (this.anzahlWerwolf > 0) {
                this.anzahlWerwolf--;
            } 
        }
    }

    tapKarte(args: EventData): void {
        const card = args.object.get("id");
        const containGameCard = this.kartenSpeicher.nextGameContains(card);
        
        if (card === "Werwolf") { 
            this.anzahlWerwolf++;
            this.kartenSpeicher.addKarte(card);
            return;
        }
        if (card === "Dorfbewohner") {
            this.anzahlDorfbewohner++;
            this.kartenSpeicher.addKarte(card);
            return;
            }
        if (!containGameCard) {
            this.kartenSpeicher.addKarte(card);
            return;
        }
        this.kartenSpeicher.removeKarte(card);
    
        
    }

    newGame() {
        this.kartenSpeicher.resetGame();
        this.anzahlDorfbewohner = 0;
        this.anzahlWerwolf = 0;
    }

    startGame(): void {
        this.appComponent.tabView.nativeElement.selectedIndex = 2;
    }
}
