import React from "react";
import { t1_1, t1_2 } from "../components/assets/t1/t1";
import { t2_1, t2_2, t2_3 } from "../components/assets/t2/t2";
import { t3_1, t3_2, t3_3 } from "../components/assets/t3/t3";
import { t4_1 } from "../components/assets/t4/t4";
import { t5_1, t5_2 } from "../components/assets/t5/t5";
import { t6_1 } from "../components/assets/t6/t6";
import { t7_1 } from "../components/assets/t7/t7";

const techData = {
  tech1: {
    nume: "D1",
    images: [t1_1, t1_2],
    image: t1_1,
    description:
      "D1 este un comutator inteligent Wi-Fi care este utilizat pentru a regla luminozitatea si pentru a seta diverse scene de iluminare in camera. Puteti porni/opri de la distanta lumina din casa dvs. Programeaza-l, opreste-l sau partajeaza-l cu familia ta. Comandati-l de la distanta folosind telecomanda Sonoff RM433 cu 8 sau 4 butoane sau prin aplicatia eWeLink disponibila pe Android si iOS. De asemenea, este compatibil si cu asistentii vocali Amazon Alexa sau Google Assistant.",
    price: "98",
    id: "tech1",
  },
  tech2: {
    nume: "Kit-ul smart Luxion",
    images: [t2_1, t2_2, t2_3],
    image: t2_1,
    description:
      "Kit-ul smart Luxion pentru draperie include motor electric, sina metalica de 4.2 metri, telecomanda curea si accesorii. Se poate controla de pe telefon prin intermediul aplicatiei Smart Life. Acest produs se poate controla din telecomanda, din aplicatia mobila sau cu ajutorul unui intrerupator, cum ar fi intrerupatorul de draperie Luxion",
    price: "819",
    id: "tech2",
  },
  tech3: {
    nume: "BroadLink RM4 Mini",
    images: [t3_1, t3_2, t3_3],
    image: t3_1,
    description:
      "Noua telecomanda BroadLink RM4 Mini iti va inlocui toate telecomenzile din casa, astfel vei putea controla toate dispozitivele cu IR( TV, aer conditionat, sisteme audio), facandu-ti viata mai usoara si confortabila! Senzorul de temperatura si umiditate HTS2 monitorizeaza temperatura si umiditatea din casa oriunde te-ai afla cu ajutorul hub-ului inteligent BroadLink RM4 Mini. Cu ajutorul telecomenzii vei putea controla toate dispozitivele electrocasnice din casa prin intermediul aplicatiei mobile BroadLink, disponibila pe Android si iOS.",
    price: "135",
    id: "tech3",
  },
  tech4: {
    nume: "HikVision DS-KV8113-WME1",
    images: [t4_1],
    image: t4_1,
    description:
      "Panoul exterior HikVision DS-KV8113-WME1 dispune de un video interfon cu o camera de 2 MP si o rezolutie 1920 x 1080. De asemenea, calitatea imaginii pe timp de noapte este clara datorita infrarosului incorporat care permite o vizualizare de pana la 3 metri. Suporta card de memorie TF de maxim 128 GB, care nu este inclus.",
    price: "718",
    id: "tech4",
  },
  tech5: {
    nume: "Releul pentru automatizare sistem usi de garaj Luxion",
    images: [t5_1, t5_2],
    image: t5_1,
    description:
      "Releul pentru automatizare sistem usi de garaj Luxion are functii de programare si temporizare. Scenariile inteligente si de automatizare ii permit releului sa execute comenzi automat. Esti notificat pe telefon de fiecare data cand usa garajului se deschide si inchide.",
    price: "150",
    id: "tech5",
  },
  tech6: {
    nume: "Sistemul de securitate PGST PG-106",
    images: [t6_1],
    image: t6_1,
    description:
      "Sistemul de securitate PGST PG-106 va ajuta sa va protejati casa, chiar si atunci cand sunteti plecat. Suporta conexiune Wi-Fi, alaturi de GSM / GPRS. Panoul principal este echipat cu un ecran tactil de 4.3 inch, iar dispozitivul accepta 8 limbi si poate salva pana la 5 apeluri de urgenta. Pentru a va permite sa creati un sistem de securitate de incredere, nu este inclus doar panoul principal de alarma, ci si accesorii precum o telecomanda, tag RFID si o sirena cu fir, printre altele.",
    price: "585",
    id: "tech6",
  },
  tech7: {
    nume: "Nuki Keypad",
    images: [t7_1],
    image: t7_1,
    description:
      "Tastatura inteligenta Nuki Keypad este compatibila cu Nuki Smart Lock 2.0 si iti va permite sa incui sau sa descui usa folosind un cod de acces de 6 cifre, fara a fi necesara utilizarea telefonului mobil. Nuki Keypad este usor de folosit pentru toata lumea si recomandat in mod special copiilor si varstnicilor. Dispozitivul se monteaza in fata usii, la exterior, prin lipire sau fixare cu suruburi. Instalarea poate fi facuta de oricine in doar cateva minute fara conectare la fire sau cabluri.",
    price: "436",
    id: "tech7",
  },
};

export default techData;
