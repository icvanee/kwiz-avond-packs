# Kwiz Avond — vragen- en meezingerpakketten

Pakketten voor de app Kwiz Avond, plus de support- en privacypagina (GitHub Pages).

De app (vanaf versie 1.1) haalt `index-2.json` op en downloadt nieuwe of bijgewerkte pakketten.
Elk bestand wordt gecontroleerd met de sha256 uit de index. De pakketten (`.kwz`) zijn versleuteld,
zodat de vragen en antwoorden hier niet te lezen zijn. `index.json` is leeg; die is voor versie 1.0.

Deze bestanden worden gemaakt met `tools/packs/build.py` in de (privé) app-repo.
Niet met de hand aanpassen: dan klopt de controle niet meer en slaat de app het pakket over.
