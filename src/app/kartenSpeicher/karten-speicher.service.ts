import { Injectable } from "@angular/core";
import { Ikarten } from "../interface/iKarten";

@Injectable({
  providedIn: "root"
})
export class KartenSpeicherService {

  test: Array<Ikarten>;
  alleKarten: Array<Ikarten>;
  naechstesSpiel: Array<Ikarten>;
        
  constructor() {
    this.naechstesSpiel = [];
    this.alleKarten = [
      {
        name: "Dorfbewohner",
        text: "Ein einfacher Bewohner des Dorfes ohne Sonderfähigkeiten.",
        position: 99,
        gut: true,
        path: "~/assets/dorfbewohner.png"
      },
      {
        name: "Werwolf",
        text: "Die Werwölfe machen Jagd auf die Dorfbewohner und bringen jede Nacht durch Abstimmung einen davon um.",
        position: 1,
        gut: false,
        path: "~/assets/werwolf.png"
      },
      {
        name: "Hexe",
        text: "Die Hexe erwacht immer direkt nachdem die Werwölfe ihr Opfer ausgesucht haben. Sie hat im Verlauf des gesamten Spiels einen Gift- und einen Heiltrank. Der Spielleiter zeigt auf die Person, die von den Werwölfen als Mordopfer gewählt wurde, und die Hexe kann diese mit ihrem Heiltrank heilen (auch sich selbst), so dass es am nächsten Morgen keinen Toten gibt. Sie kann aber auch den Gifttrank auf einen anderen Spieler anwenden; dann gibt es mehrere Tote.",
        position: 3,
        gut: true,
        path: "~/assets/hexe.png"
      },
      {
        name: "Jäger",
        text: " Scheidet der Jäger aus dem Spiel aus, feuert er in seinem letzten Atemzug noch einen Schuss ab, mit dem er einen Spieler seiner Wahl mit in den Tod reißt, d. h. er bestimmt einen Spieler, der mit ihm aus dem Spiel ausscheidet.",
        position: 0,
        gut: true,
        path: "~/assets/jaeger.png"
      },
      {
        name: "Amor",
        text: "Amor erwacht nur einmal in der allerersten Nacht, um zwei Spieler seiner Wahl miteinander zu verkuppeln (eventuell auch sich selbst). Danach schläft er wieder ein. Anschließend berührt der Spielleiter die beiden Verliebten an der Schulter, sodass diese kurz erwachen können und wissen, wer der jeweilige Partner ist. Die Verliebten haben im Laufe des Spiels die Aufgabe, den Partner zu beschützen, denn wenn einer der beiden stirbt, macht es ihm der Partner trauernd nach; sie dürfen nie gegeneinander stimmen.",
        position: -1,
        gut: true,
        path: "~/assets/amor.png"
      },
      {
        name: "Dieb",
        text: "Der Dieb ist der erste, der im Spiel erwacht. Wird mit Dieb gespielt, werden zwei Karten mehr ausgeteilt. Der Dieb darf diese ansehen und seine Karte gegen eine der beiden übrig gebliebenen Karten austauschen. Er hat ab jetzt also eine neue Rolle. Möchte er nicht tauschen, ist er für den Rest des Spiels einfacher Dorfbewohner. (Bleiben am Ende zwei Werwölfe übrig, muss der Dieb seine Karte tauschen, da die Werwölfe sonst im Spiel keine realistische Chance hätten.)",
        position: -2,
        gut: true,
        path: "~/assets/dieb.png"
      },
      {
        name: "Mädchen",
        text: "Das kleine Mädchen darf nachts in der Werwolf-Phase heimlich blinzeln, um so die Werwölfe zu erkennen. Die Werwölfe ihrerseits hingegen achten natürlich darauf, das Mädchen dabei zu ertappen, es besteht also beim Blinzeln ein gewisses Risiko.",
        position: 0,
        gut: true,
        path: "~/assets/kleinemaedchen.png"
      },
      {
        name: "Seherin",
        text: "Die Seherin erwacht, während alle anderen schlafen und darf sich eine Person aussuchen, deren Rolle ihr der Spielleiter offenbaren soll. Dabei sollte der Spielleiter möglichst unauffällig vorgehen, idealerweise wiederum durch Gesten, so dass die Schlafenden nicht hören und raten können, welche Person erwählt wurde. Da die Seherin zu jeder Runde die Rolle einer weiteren Person im Spiel kennt, kann sie großen Einfluss nehmen, muss aber ihr Wissen vorsichtig einsetzen.",
        position: 2,
        gut: true,
        path: "~/assets/seherin.png"
      }
    ];
  }

  getAllCards(): Array<Ikarten> {
    return this.alleKarten;
  }

  addKarte(name: string): void {
    let karte: Ikarten;

    for (let k of this.alleKarten) {
      if (k.name === name) {
        karte = k;
      }
    }

    this.naechstesSpiel.push(karte);
  }

}
