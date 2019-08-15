import { Component, OnInit } from "@angular/core";
import { Karte } from "./Karte";
import { KartenSpeicherService } from "../kartenSpeicher/karten-speicher.service";
import { EventData } from "tns-core-modules/data/observable";

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    cards: Array<Karte>;
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
        let card = args.object.get("id");

        if (card === "DorfbewohnerPlus") {
            this.anzahlDorfbewohner++;
        } else {
            this.anzahlWerwolf++;
        }
    }

    tapMinus(args: EventData) {
        let card = args.object.get("id");

        if (card === "DorfbewohnerMinus") {
            this.anzahlDorfbewohner--;
        } else {
            this.anzahlWerwolf--;
        }
    }

    tapKarte(args: EventData) {
        let card = args.object.get("id");
        let a = this.kartenSpeicher.nextGameContains(card);
        //console.log(a);
        //console.log(this.kartenSpeicher.naechstesSpiel);
        if (card === "Werwolf" || card === "Dorfbewohner") {
            if (card === "Werwolf") {
                this.anzahlWerwolf++;
            } else {
                this.anzahlDorfbewohner++;
            }
        } else {
            if (!a) {
                this.kartenSpeicher.addKarte(card);
                args.object.set("tintColor", "rgba(50,50,50,0.7)");
            } else {
                args.object.set("tintColor", "rgba(50,50,50,0)");
                this.kartenSpeicher.removeKarte(card);
            }
        }
        
    }
}
