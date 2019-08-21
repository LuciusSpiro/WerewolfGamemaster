import { Injectable } from "@angular/core";
import { Ikarten } from "../interface/iKarten";
import alleKarten from "./alleKarten.json";

@Injectable({
  providedIn: "root"
})
export class KartenSpeicherService {

  test: Array<Ikarten>;
  alleKarten: Array<Ikarten>;
  naechstesSpiel: Array<Ikarten>;
  aktuellesSpiel: Array<Ikarten>;
  
  constructor() {
    this.aktuellesSpiel = [];
    this.naechstesSpiel = [];
    this.alleKarten = alleKarten;
  }

  getAllCards(): Array<Ikarten> {
    return this.alleKarten;
  }

  getKarte(name): Ikarten{
    return this.alleKarten.find((karte) => karte.name === name);
  }

  getNextGame(): Array<Ikarten> {
    return this.naechstesSpiel;
  }

  resetGame(): void {
    this.naechstesSpiel = [];
  }

  addKarte(name: string): void {
    let karte = this.getKarte(name);

    if (name === "Werwolf" && this.nextGameContains("Werwolf")) {
      this.nextGameGetKarte(name).anzahl++;
      
      return;
    }
    if (name === "Dorfbewohner" && this.nextGameContains("Dorfbewohner")) {
      this.nextGameGetKarte(name).anzahl++;
      
      return;
    }
    
    this.naechstesSpiel.push(karte);
  }

  nextGameContains(name: string): boolean {
    return !!this.nextGameGetKarte(name);
  }

  nextGameGetKarte(name: string): Ikarten {
    return this.naechstesSpiel.find((karte) => karte.name === name);
  }

  removeKarte(name: string): void {
    if (name === "Werwolf") {
      const werwolfKarte = this.nextGameGetKarte("Werwolf");
      werwolfKarte.anzahl--;
      if (werwolfKarte.anzahl === 0) {
        this.naechstesSpiel = this.naechstesSpiel.filter((karte) => karte.name !== name);
      }

      return;
    }
    if (name === "Dorfbewohner") {
      const bewohnerKarte =  this.nextGameGetKarte("Dorfbewohner");
      bewohnerKarte.anzahl--;
      if (bewohnerKarte.anzahl === 0) {
        this.naechstesSpiel = this.naechstesSpiel.filter((karte) => karte.name !== name);
      }

      return;
    }
      
    this.naechstesSpiel = this.naechstesSpiel.filter((a) => a.name !== name);
    
  }

  startGame(): void {
    this.aktuellesSpiel = this.naechstesSpiel.filter((a) => a.position !== 0);
    this.aktuellesSpiel.sort((a1, a2) => a1.position - a2.position);

  }

  getCurrentGame(): Array<Ikarten> {
    return this.aktuellesSpiel;
  }
}
