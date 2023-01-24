# Bookshelf

Ziel dieses Projekts ist die Entwicklung einer Website, auf der SchülerInnen schulintern Bücher, welche für den Unterricht angeschafft wurden, verkaufen können. 

## Ideen

Bücher, die für die Schule gelesen (oder auch nicht gelesen) wurden, werden meistens nicht länger verwendet. Die Auswahl der Bücher ist auch in späteren Jahrgängen oft identisch oder ähnlich, weshalb sich ein digitaler Marktplatz dafür anbietet. So können die Bücher wiederverwendet werden, was nicht nur nachhaltig, sondern auch kostengünstiger ist. 
Das Erstellen eines Accounts soll nicht notwendig sein, um Barrieren auch für jüngere SchülerInnen zu senken. Stattdessen wird beim Erstellen einer Anzeige eine E-Mail oder Handynummer angegeben, an die man sich wenden kann.
Die Plattform nur schulintern zu halten bedeutet bessere Kontrolle und einfache Abwicklung, man bespricht in zwei Nachrichten einen Treffpunkt in der morgigen Pause. 
Die Plattform wird möglichst über die SV, Lehrkräfte oder müngliche Überlieferung bekannt gemacht.

## Technische Umsetzung und Details

Die WebApp wird mit Hilfe von React erstellt. In einer Datenbank werden die Anzeigen gespeichert und verwaltet. Da eine Suchfunktion auf Google-Niveau nicht ohne weiteres implementiert werden kann, wird bei der Erstellung einer Anzeige die ISBN abgefragt und über eine API der korrekt geschriebene Buchtitel abgefragt. Suchen kann man dann nach ISBN oder dem (korrekt geschriebenen) Buchtitel (Suchverschläge sollen dies vereinfachen). Es ist alternativ möglich, für jedes Fach (Deutsch, Englisch, Spanisch, Französich) eine Übersicht der Bücher zu sehen, welche aktuell zum Verkauf stehen. 

Bei der Erstellung einer Anzeige werden Kontaktinformation (E-Mail oder Handynummer), ISBN, Bilder, Name (des Verkaufenden), sowie eine kurze Beschreibung eingegeben. Auch dafür ist kein Benutzerkonto notwendig, auf Grund der überschaubaren Größe der Plattform werden Anzeigen vor der Veröffentlichung manuell geprüft (hoffentlich). Damit eine Anzeige als gelöscht/verkauft markiert werden kann, wird die "Macht" über die Anzeige in localStorage festgehalten (natürlich auch in der Datenbank zur Authentifikation).

Eine mobile App ist nicht in Planung, vielleicht später mittels React Native (der Einfachheit halber).