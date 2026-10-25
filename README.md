# Kwiz Avond — vragen- en meezingerpakketten

Openbare pakketten voor de app Kwiz Avond. De app haalt `index.json` op en downloadt
nieuwe of bijgewerkte pakketten; elk bestand wordt gecontroleerd met de sha256 uit de index.

Deze bestanden worden gemaakt met `tools/packs/build.py` in de (privé) app-repo.
Niet met de hand aanpassen: dan klopt de controle niet meer en slaat de app het pakket over.

Meezingers verwijzen naar de openbare previews van 30 seconden van Apple (iTunes);
er staan geen songteksten of geluidsbestanden in deze repo.
