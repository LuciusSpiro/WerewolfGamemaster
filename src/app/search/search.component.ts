import { Component, OnInit } from "@angular/core";
import { KartenSpeicherService } from "../kartenSpeicher/karten-speicher.service";
import { Ikarten } from "../interface/iKarten";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    karten: Array<Ikarten>;
    constructor(private kartenSpeicher: KartenSpeicherService) {
        
    }

    ngOnInit() {
        this.karten = this.kartenSpeicher.naechstesSpiel;
        this.karten.sort((a1, a2) => a1.position - a2.position);
    }

    next() {
        let first = this.karten.shift();
        this.karten.push(first);
    }
}
