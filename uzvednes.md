# Atkārtoti izmantojamas uzvedņu veidnes

Aizpildāmie lauki ir rakstīti `{{LIELIEM_BURTIEM}}`. Pirms uzvedni sūti MI, aizstāj tos ar konkrēto kodu, prasību vai testa datiem.

---

## 1. Koda skaidrošana trīs līmeņos

**Kad lietot:** kad jāsaprot svešs kods, pirms to labo vai maini.

~~~text
Tu esi pieredzējis {{VALODA}} izstrādātājs un skaidro kodu kolēģim, kurš to redz pirmo reizi.

Konteksts: {{ĪSS_APRAKSTS_PAR_PROGRAMMU}}
Prasības, kurām kodam jāatbilst:
{{PRASĪBU_SARAKSTS}}

Kods:
```{{VALODA}}
{{KODS}}
```

Izskaidro šo kodu trīs līmeņos:
1. **Viens teikums:** ko kods dara, no lietotāja viedokļa.
2. **Soli pa solim:** ko dara katra rinda vai bloks, un kādas vērtības ir mainīgajiem
   piemērā ar ievaddatiem {{PIEMĒRA_IEVADDATI}}.
3. **Detaļas un riski:** robežgadījumi (0, negatīvas vērtības, tukši saraksti, {{CITI_ROBEŽGADĪJUMI}}),
   valodas īpatnības (tipu pārveide, noapaļošana, kārtošana u. c.) un vietas, kur kods
   varētu neatbilst prasībām. Katrai aizdomai norādi prasības numuru.

Kodu nelabo. Ja kaut kas nav skaidrs, uzdod jautājumu, nevis pieņem.
~~~

---

## 2. Labošana pēc neveiksmīga testa

**Kad lietot:** kad tests neizdodas un jāatrod loģikas kļūda.

~~~text
Tests neizdodas. Palīdzi atrast un labot cēloni.

Funkcija:
```{{VALODA}}
{{FUNKCIJAS_KODS}}
```

Neveiksmīgais tests:
- Izsaukums: {{IZSAUKUMS}}
- Gaidīts: {{GAIDĪTAIS_REZULTĀTS}}
- Faktiski: {{FAKTISKAIS_REZULTĀTS}}
- Prasība, uz kuru tests balstās: {{PRASĪBAS_NR_UN_TEKSTS}}

Citi testi šai funkcijai, kuriem jāpaliek zaļiem:
{{CITU_TESTU_SARAKSTS}}

Ierobežojumi:
- Nemaini funkcijas nosaukumu, parametrus un testus.
- Maini tikai to, kas nepieciešams šī testa labošanai.
- {{PAPILDU_IEROBEŽOJUMI}}

Atbildē:
1. Izseko kodu ar testa ievaddatiem un parādi, kurā vietā rezultāts novirzās.
2. Nosauc cēloni vienā teikumā.
3. Atgriez TIKAI izmainīto funkciju.
4. Iesaki vienu papildu testu, kas šo kļūdu notvertu robežgadījumā.
~~~

---

## 3. Jautājumi pirms algoritma

**Kad lietot:** pirms jaunas funkcijas izstrādes, lai noskaidrotu neskaidrās prasības.

~~~text
Man jāizstrādā jauna funkcija. Vēl NERAKSTI kodu.

Funkcijas nosaukums un parametri: {{FUNKCIJAS_SIGNATŪRA}}
Ko tai jādara: {{UZDEVUMA_APRAKSTS}}
Saistītās prasības:
{{PRASĪBU_SARAKSTS}}
Esošās funkcijas, ko var izmantot: {{ESOŠĀS_FUNKCIJAS}}
Zināmie piemēri (ievaddati → gaidītais rezultāts):
{{PIEMĒRI}}

Uzdod man jautājumus par visu, kas prasībās nav viennozīmīgi noteikts, piemēram:
- robežas: vai sākuma un beigu diena ir iekļauta;
- nederīgi vai tukši ievaddati, negatīvas vērtības;
- dublikāti un pārklāšanās;
- noapaļošana un mērvienības;
- {{CITAS_JOMAS_KO_PĀRBAUDĪT}}.

Katram jautājumam piedāvā noklusējuma atbildi un paskaidro, kā tā ietekmēs rezultātu.
Kad būšu atbildējis, apraksti algoritmu soļos (pseidokodā) un piedāvā testu
gadījumus, kas aptver katru atbildi. Kodu raksti tikai pēc mana apstiprinājuma.
~~~
