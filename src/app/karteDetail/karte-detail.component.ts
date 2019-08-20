import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { KartenSpeicherService } from "../kartenSpeicher/karten-speicher.service";
import { Ikarten } from "../interface/iKarten";

@Component({
    selector: "karteDetail",
    moduleId: module.id,
    templateUrl: "./karte-detail.component.html"
})
export class KarteDetailComponent implements OnInit {
    karte: Ikarten;

    constructor(
        private kartenService: KartenSpeicherService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        console.log('init');
        const name = this.route.snapshot.params.id;
        // this.karte = this.kartenService.getKarte(name);
    }

    onBackTap(): void {
        this.routerExtensions.back();
    }
}
