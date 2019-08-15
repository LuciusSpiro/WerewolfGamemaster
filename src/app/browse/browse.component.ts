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
    constructor(private kartenSpeicher: KartenSpeicherService) {
        
    }
    ngOnInit(): void {
     this.cards = this.kartenSpeicher.getAllCards();

    }

    tapKarte(args: EventData) {
        let card = args.object.get("id");
        let a = this.kartenSpeicher.nextGameContains(card);
        console.log(a);
        console.log(this.kartenSpeicher.naechstesSpiel);
        if (!a) {
            this.kartenSpeicher.addKarte(card);
            args.object.set("tintColor", "rgba(50,50,50,0.7)");
        } else {
            args.object.set("tintColor", "rgba(50,50,50,0)");
            this.kartenSpeicher.removeKarte(card);
        }

    }
}
