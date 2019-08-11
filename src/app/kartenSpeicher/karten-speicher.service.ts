import { Injectable } from "@angular/core";
import { Ikarten } from "../interface/iKarten";

@Injectable({
  providedIn: "root"
})
export class KartenSpeicherService {

  test: Array<Ikarten>;
  alleKarten: Array<Ikarten>;
        
  constructor() {
    this.alleKarten = [
      {
        name: "Dorfbewohner",
        text: "bla",
        position: 1,
        gut: true,
        path: "nix"
      },
      {
        name: "Werwolf",
        text: "bla",
        position: 5,
        gut: false,
        path: "nix"
      }
    ];
  }

  getAllCards(): Array<Ikarten> {
    return this.alleKarten;
  }

}
