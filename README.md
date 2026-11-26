# Drei in einer Reihe

Ein Spiel für zwei Spieler im Browser, entwickelt als Bewerbungsaufgabe für die Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei adesso.

**Live spielen:** https://oeztuerk1992.github.io/drei-in-einer-reihe/

## Spielregeln

- Das Spielfeld hat 4 × 4 Felder.
- Zwei Spieler spielen gegeneinander: Kreuz (x) und Kreis (o). Kreuz beginnt.
- Die Spieler setzen abwechselnd ihr Symbol in ein freies Feld.
- Wer drei eigene Symbole direkt nebeneinander hat – waagerecht, senkrecht oder diagonal –, **verliert**. Der andere Spieler gewinnt.
- Sind alle Felder belegt und niemand hat verloren, endet das Spiel unentschieden.
- Mit „Neues Spiel“ beginnt eine neue Runde.

## Technik

- HTML, CSS und JavaScript, ohne Frameworks oder Bibliotheken
- Das Spielfeld ist mit CSS Grid aufgebaut.

## Starten

- Online: den Live-Link oben öffnen
- Lokal: Repository herunterladen und `index.html` im Browser öffnen

## So funktioniert der Code

| Teil | Aufgabe |
|---|---|
| `board` | Array mit 16 Einträgen. Jeder Eintrag ist `"x"`, `"o"` oder `""` (leer). |
| `lines` | Liste aller 24 möglichen Dreier-Linien: 8 waagerecht, 8 senkrecht, 4 diagonal ↘ und 4 diagonal ↙. |
| `renderBoard()` | Zeichnet das Spielfeld neu aus dem Array `board`. |
| `handleClick()` | Setzt das Symbol in ein freies Feld, prüft auf Verlieren und Unentschieden und wechselt danach den Spieler. |
| `hasThreeInARow()` | Geht alle Linien durch und prüft, ob der aktuelle Spieler in einer Linie drei Symbole hat. |
| `showLoser()` | Zeigt an, wer verloren und wer gewonnen hat. |
| `updateStatus()` | Zeigt an, welcher Spieler am Zug ist. |
| `restartGame()` | Setzt Spielfeld, Spieler und Spielstatus zurück. |

Wichtig ist die Reihenfolge in `handleClick()`: Die Prüfung auf drei in einer Reihe passiert direkt nach dem Setzen und **vor** dem Spielerwechsel. So wird immer der Spieler geprüft, der gerade gesetzt hat. Erst danach wird auf Unentschieden geprüft. Wenn der letzte Zug ins letzte freie Feld drei in einer Reihe ergibt, verliert der Spieler also, und das Spiel endet nicht unentschieden.

## Autor

Sinan Öztürk – https://github.com/Oeztuerk1992
