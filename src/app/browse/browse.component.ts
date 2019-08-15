import { Component, OnInit } from "@angular/core";
import { Karte } from "./Karte";
import { KartenSpeicherService } from "../kartenSpeicher/karten-speicher.service";

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
}

