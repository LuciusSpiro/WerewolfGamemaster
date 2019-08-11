import { Component, OnInit } from "@angular/core";
import { Player } from "./player";


@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit{
    public karten: Array<Player>;
    constructor() {
    }

    ngOnInit() {
        this.karten = [{name: "Dorfbewohner", text: "bla",  position: 1, gut: true, path: "nix"}, {name: "Werwolf", text: "bla",  position: 5, gut: false, path: "nix"}];
        this.karten.sort((a1, a2) => a1.position - a2.position);
    }

    next() {
        let first = this.karten.shift();
        this.karten.push(first);
        console.log(this.karten);
    }
}
