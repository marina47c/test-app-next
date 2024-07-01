const sql = require('better-sqlite3');
const db = sql('posts.db');

const dummyPosts = [
   {
      title: 'Samoborček',
      slug: 'samoborcek',
      image: '/images/samoborcek.jpg',
      summary:
         'Prvi SAMOBORČEK koji je prošel kroz Gajnice 1902 g.',
      description: `
      Samoborček, popularni naziv uskotračne  željeznice koja je povezivala Zagreb i Samobor 1901–79. Koncesiju za  izgradnju i korištenje željezničke pruge (na 90 godina) dobilo je  dioničarsko društvo Vicinalna željeznica Zagreb–Samobor sa sjedištem u  Budimpešti. Sjedište uprave dioničarskog društva koje je upravljalo  željeznicom 1918. premješteno je u Zagreb. Pruga je u početku bila  duljine 19 km, no 1951. dograđena je još 5 km duga trasa od Samobora do  Bregane (za potrebe vojnog Tehničkog remontnog zavoda Bregana i tvornice  Vladimir Bakarić). Duž pruge izgrađena su dva kolodvora (u Zagrebu i  Samoboru) i četiri postaje (u Vrapču, Stenjevcu, Susedgradu i Svetoj  Nedelji). Prugom je prometovalo sedam vlakova na dan, iz Samobora u  Zagreb kretala su tri, a iz Zagreba u Samobor četiri vlaka. Najveća  brzina koju su lagane parne tenderske lokomotive s dvije, tri ili četiri  osovine mogle postići bila je 40 km/h. Vagoni su bili otvoreni (ljeti) i  zatvoreni (zimi), II. i III. razreda.
    `,
   },
   {
      title: 'Obnovljena Bolnička',
      slug: 'onovljena-bolnicka',
      image: '/images/obnovljena_cesta.jpg',
      summary:
         'Obnova Bolničke ceste',
      description: `
     Nakon 15ak godina napravljena je obnova Bolničke ceste od Ulice Majke Terezije do Bolničke ulice odvojak. Radovi su se odvijali u dvije faze, a sveukupno je obnovljeno 7000m2 ceste te smo u ovom mandatu obnovili veći dio transverzale Bolnička cesta - Karažnik. Ucrtana je nova horizontalna signalizacija, te je cesta prometna od 29.06.2024.
    `,
   },
   {
      title: 'Novi mostovi',
      slug: 'novi-mostovi',
      image: '/images/mostovi.jpg',
      summary:
         'Iz Grada su objavili detalje o tri nova mosta u Zagrebu',
      description: `
     https://www.vecernji.hr/zagreb/tri-nova-mosta-u-zagrebu-tomasevic-potvrdio-gdje-ce-se-graditi-1781080?fbclid=IwZXh0bgNhZW0CMTEAAR1-61vAXjGvMUWiu56wzdBkKApCWpDafbVQ0gJLT1aDfkRljQgybMpXuxY_aem_J9C9CJ0pm3IHST_y_pnqYg
    `,
   },
   {
      title: 'Poklanjam medu',
      slug: 'medo',
      image: '/images/medo.jpg',
      summary:
         "Poklanjam medu, 80 cm",
      description: `
    `,
   },
   {
      title: 'Kolica',
      slug: 'kolica',
      image: '/images/kolica.jpg',
      summary:
         'Fotka dana!! Netko je pogrešno parkal auto. ',
      description: `
      Fotka dana!! Netko je pogrešno parkal auto. 
    `,
   },
   {
      title: 'Mladi grah',
      slug: 'mladi-grah',
      image: '/images/mladi_grah.jpg',
      summary:
         'Predbilježbe za mladi grah.',
      description: `
      Cijenjeni kupci,
      nakon prošlogodišnje uspješne sezone mladog graha i velikog broja zadovoljnih kupaca, s veseljem Vas obavještavamo da će mladi grah trešnjevac opet biti u prodaji i ovu sezonu, kao i suhi nešto kasnije.
      Za sve one koji su pitali dal' se još uvijek mogu pribilježiti, obavijest da OPG Pleskalt (MIBPG: 145744) i dalje prima  predbilježbe za 𝐦𝐥𝐚𝐝𝐢 𝐠𝐫𝐚𝐡 𝐮 𝐥𝐣𝐮𝐬𝐜𝐢, te će se predbilježbe odrađivati po redu kako će pristizati kao i do sada.
      𝐂𝐢𝐣𝐞𝐧𝐚 - 𝟐 €/𝐤𝐠.
 `,
   },
   {
      title: 'Narudžbe za meso',
      slug: 'meso',
      image: '/images/meso.jpg',
      summary:
         'Primam narudžbe za meso.',
      description: `
     Primam naruzbe za meso
      Junece meso mjesano 8 e kg 
      Cisti juneci snicli 11 e kg
      Kosti za juhu 1.5 e kg 
      Cevapi 8 e kg
      Pljeske 8 e kg 
      Ramstek 8.5 e kg 
      Vrat juneci 8 e kg
      Rebra/prsa 7.6 e kg
      Pecenice domace 8 e kg 
      Jeger 7 e kg 
      Tirolka 7.5 
      Parizer 7 e kg
      Hrenovke 10 e kg
      Kobase domace 8 e kg
      Kranjska 7 e kg
      Meso za rostilj napacano 6.5 e kg
    `,
   },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS posts (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       description TEXT NOT NULL
    )
`).run();

async function initData() {
   const stmt = db.prepare(`
      INSERT INTO posts VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @description
      )
   `);

   for (const post of dummyPosts) {
      stmt.run(post);
   }
}

initData();
