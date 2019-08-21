import { Component, OnInit } from "@angular/core";
import { KartenSpeicherService } from "../kartenSpeicher/karten-speicher.service";
import { EventData } from "tns-core-modules/data/observable";
import { Ikarten } from "../interface/iKarten";

@Component({
    selector: "Start",
    moduleId: module.id,
    templateUrl: "./start.component.html"
})
export class StartComponent implements OnInit {
    cards: Array<Ikarten>;
    anzahlWerwolf: number;
    anzahlDorfbewohner: number;
    constructor(private kartenSpeicher: KartenSpeicherService) {
        
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
            this.anzahlDorfbewohner--;
        } else {
            this.anzahlWerwolf--;
        }
    }

    tapKarte(args: EventData) {
        let card = args.object.get("id");
        let a = this.kartenSpeicher.nextGameContains(card);
        
        if (card === "Werwolf" || card === "Dorfbewohner") {
            if (card === "Werwolf") {
                this.anzahlWerwolf++;
                this.kartenSpeicher.addKarte(card);
            } else {
                this.anzahlDorfbewohner++;
                this.kartenSpeicher.addKarte(card);

            }
        } else {
            if (!a) {
                this.kartenSpeicher.addKarte(card);
                //args.object.set("tintColor", "rgba(50,50,50,0.7)");
            } else {
                //args.object.set("tintColor", "rgba(50,50,50,0)");
                this.kartenSpeicher.removeKarte(card);
            }
        }
        //console.log(this.kartenSpeicher.toNameList());
    }

    newGame() {
        this.kartenSpeicher.resetGame();
        this.anzahlDorfbewohner = 0;
        this.anzahlWerwolf = 0;
    }
}
