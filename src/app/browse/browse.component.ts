import { Component, OnInit } from "@angular/core";
import { Karte } from "./Karte"

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    cards: Array<Karte>;
    constructor() {
        // Use the component constructor to inject providers.
    }
    ngOnInit(): void {
     this.cards = [
        {
            name: "Werwolf",
            text: "Werwölfe fressen kleine Kinder.",
            position: 1,
            gut: false,
            path: "~/assets/werwolf.png"
        }, {

            name: "Dorfbewohner",
            text: "Dorfbewohner hängen unschuldige Leute auf.",
            position: 0,
            gut: true,
            path: "~/assets/dorfbewohner.png"
        }, {
            name: "Seherin",
            text: "Die Seherin kann pro Runde einen Spieler auf gut oder böse untersuchen.",
            position: 3,
            gut: true,
            path: "~/assets/seherin.png"
        }, {
            name: "Hexe",
            text: "Die Hexe kann jeweils einmalig einen Heiltrank und einen Gifttrank einsetzen.",
            position: 2,
            gut: true,
            path: "~/assets/hexe.png"
        }
    ];

    }
}

