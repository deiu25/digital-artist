<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

Backend pentru Aplicația de Portofoliu Digital Artist

1. Descriere generală
   Această aplicație backend gestionează un portofoliu de lucrări pentru un artist digital, oferind funcționalități de CRUD (Creare, Citire, Actualizare și Ștergere) pentru lucrările artistului și opțiuni de afișare. Aplicația utilizează NestJS și este conectată la o bază de date SQLite.

2. Cerințe de sistem
   Node.js v16+
   NPM v8+
   SQLite

3. Setare și instalare
   Instalează dependențele necesare:

```bash
$ npm install
```

Configurare baza de date:

Fișierul database.sqlite va fi generat automat în directorul principal la prima rulare a aplicației dacă folosești SQLite.

4. Rularea aplicației
   4.1. Rularea locală pentru dezvoltare
   Pornește aplicația în modul dezvoltare:

```bash
$ npm run start:dev
```

4.2. Rularea în producție
Pentru rularea în producție:

```bash
npm run build
npm run start:prod
```

6. Endpoints și utilizare
   6.1. Endpoints principale
   GET /portfolio
   Obține toate lucrările din portofoliu.

POST /portfolio
Adaugă o lucrare nouă în portofoliu.

Body: { title: string, description: string, clientUrl: string, status: string }
PATCH /portfolio/:id
Actualizează detaliile unei lucrări.

Body: { title?: string, description?: string, clientUrl?: string, status?: string }
DELETE /portfolio/:id
Șterge o lucrare din portofoliu.

6.2. Rularea testelor
Testare unitare:

```bash
npm run test
```

Testare end-to-end:

```bash
npm run test:e2e
```

7. Considerații adiționale
   CORS: Setările de CORS permit accesul din orice origine (origin: '\*'). În producție, este recomandat să restricționezi aceste setări.
   Upload fișiere: Fişierele sunt stocate în directorul uploads/. Fişierele sunt șterse automat atunci când lucrările sunt eliminate din baza de date.
8. Observații pentru evaluare
   Aplicația este complet funcțională, oferind funcționalitățile cerute, precum și testare unitare și e2e. Este configurată pentru rulare atât în modul de dezvoltare, cât și în modul de producție, și este documentată pentru a permite utilizatorului să o pornească și să o testeze cu ușurință.
