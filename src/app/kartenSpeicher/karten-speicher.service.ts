import { Injectable } from "@angular/core";
import { Ikarten } from "../interface/iKarten";
import alleKarten from "./alleKarten.json";

@Injectable({
  providedIn: "root"
})
export class KartenSpeicherService {

  runde = 1;
  alleKarten: Array<Ikarten>;
  naechstesSpiel: Array<Ikarten>;
  aktuellesSpiel: Array<Ikarten>;
  uebersichtSpiel: Array<Ikarten>;

  constructor() {
    this.aktuellesSpiel = [];
    this.naechstesSpiel = [];
    this.uebersichtSpiel = [];
    this.alleKarten = alleKarten;
  }

  getAllCards(): Array<Ikarten> {
    return this.alleKarten;
  }

  getKarte(name): Ikarten {
    return this.alleKarten.find((karte) => karte.name === name);
  }

  getNextGame(): Array<Ikarten> {
    return this.naechstesSpiel;
  }

  resetGame(): void {
    this.naechstesSpiel = [];
    this.uebersichtSpiel = [];
  }

  addKarte(name: string): void {
    const karte = this.getKarte(name);

    this.naechstesSpiel.push(karte);
    this.uebersichtSpiel.push({ ...karte });
  }

  nextGameContains(name: string): boolean {
    return !!this.nextGameGetKarte(name);
  }

  nextGameGetKarte(name: string): Ikarten {
    return this.naechstesSpiel.find((karte) => karte.name === name);
  }

  removeKarte(name: string): void {
    const index = this.uebersichtSpiel.indexOf(this.nextGameGetKarte(name));
    this.uebersichtSpiel.splice(index, 1);

    if (name === "Werwolf") {
      const index = this.naechstesSpiel.indexOf(this.nextGameGetKarte(name));
      this.naechstesSpiel.splice(index, 1);

      return;
    }
    if (name === "Dorfbewohner") {
      const index = this.naechstesSpiel.indexOf(this.nextGameGetKarte(name));
      this.naechstesSpiel.splice(index, 1);

      return;
    }

    this.naechstesSpiel = this.naechstesSpiel.filter((a) => a.name !== name);

  }

  removeKarteFromOverview(karte: Ikarten): Array<Ikarten> {
    if (karte.spieler !== "") {
      this.uebersichtSpiel = this.uebersichtSpiel.filter((a) => a.spieler !== karte.spieler);

      return this.uebersichtSpiel;
    }
  }

  startGame(): void {
    this.runde = 1;
    this.aktuellesSpiel = this.naechstesSpiel.filter((a) => a.position !== 0);
    this.aktuellesSpiel = this.getUniqueCards(this.aktuellesSpiel);
    if (!!this.aktuellesSpiel.find((karte) => karte.name === "Werwolf")) {
      this.aktuellesSpiel.find((karte) => karte.name === "Werwolf").anzahl =
        this.naechstesSpiel.reduce((accumulator, current) => {
          const wolf = current.name === "Werwolf" ? 1 : 0;
          accumulator = accumulator + wolf;

          return accumulator;
        }, 0);
    }

    this.aktuellesSpiel.sort((a1, a2) => a1.position - a2.position);

  }

  getCurrentGame(): Array<Ikarten> {
    return this.aktuellesSpiel;
  }
  getOverviewGame(): Array<Ikarten> {
    return this.uebersichtSpiel;
  }

  killPerson(karte: Ikarten) {
    karte.anzahl--;
    if (karte.anzahl <= 0) {
      this.aktuellesSpiel = this.aktuellesSpiel.filter((item) => karte.name !== item.name);
    }
  }

  getUniqueCards(karten: Array<Ikarten>): Array<Ikarten> {
    return karten.filter((value, index, self) => self.indexOf(value) === index);
  }

  getTurn(): number {
    return this.runde;
  }

  increaseTurn(): number {
    this.runde += 1;

    return this.runde;
  }
}
