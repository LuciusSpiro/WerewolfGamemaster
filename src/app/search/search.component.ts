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
        this.karten = new Array<Ikarten>();
        this.karten = this.kartenSpeicher.getAllCards();
        this.karten = this.karten.filter((a) => a.position !== 0);
        this.karten.sort((a1, a2) => a1.position - a2.position);
    }

    next() {
        let first = this.karten.shift();
        if (first.position >= 0) {
            this.karten.push(first);
        }
    }
}
