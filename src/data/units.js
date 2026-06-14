// src/data/units.js

import unidadeSaoJoao from "../assets/units/mg/lafaiete/saojoao.png";
import unidadeCachoeira from "../assets/units/mg/lafaiete/cachoeira.jpeg";

export const units = [
  {
    id: 1,
    slug: "lafaiete-saojoao",
    city: "Conselheiro Lafaiete",
    name: "Polars Fighter São Joao",
    image: unidadeSaoJoao,

    address: "Rua Benjamin Constant, 455",
    neighborhood: "São Joao",

    whatsapp:
      "https://wa.me/5531989090839",

    maps:
      "https://maps.app.goo.gl/YEhw2Enj6MRndBhRA",

    modalities: [
      "Jiu-Jitsu",
      "Muay Thai",
      "Karatê",
      "MMA",
    ],
    schedule: [
        {
            modality: "Jiu-Jitsu",
            days: "Segunda a Sexta",
            time: "19:00",
            instructor: "Professor João",
        },

        {
            modality: "Muay Thai",
            days: "Segunda, Quarta e Sexta",
            time: "20:00",
            instructor: "Professor Carlos",
        },

        {
            modality: "Karatê",
            days: "Terça e Quinta",
            time: "18:00",
            instructor: "Professor Pedro",
        },
    ]
  },

  {
    id: 2,
    slug: "lafaiete-cachoeira",
    city: "Conselheiro Lafaiete",
    name: "Polars Fighter Jardim Cachoeira",
    image: unidadeCachoeira,

    address: "Rua Maria Efigênia de Almeida Vieira, 15",
    neighborhood: "Jardim Cachoeira",

    whatsapp:
      "https://wa.me/5531989090839",

    maps:
      "https://maps.app.goo.gl/y7xMwjd5QTW6tVYU8",

    modalities: [
      "Jiu-Jitsu",
      "Muay Thai",
      "MMA",
    ],
    schedule: [
        {
            modality: "Jiu-Jitsu",
            days: "Segunda a Sexta",
            time: "19:00",
            instructor: "Professor João",
        },

        {
            modality: "Muay Thai",
            days: "Segunda, Quarta e Sexta",
            time: "20:00",
            instructor: "Professor Carlos",
        },

        {
            modality: "Karatê",
            days: "Terça e Quinta",
            time: "18:00",
            instructor: "Professor Pedro",
        },
    ]
  },
];