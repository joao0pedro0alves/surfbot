import {Plan} from '../@types'

export const PLANS: Plan[] = [
    {
        id: "0",
        title: "Infantil",
        amountPlanks: 1,
        price: 49.0,
        details: [
            "Público entre 5 e 15 anos",
            "Equipamentos fornecidos",
            "Horários de Sex. à Sab.",
            "2 horas seguidas de aula",
        ],
    },
    {
        id: "1",
        title: "Adulto",
        amountPlanks: 2,
        price: 69.0,
        details: [
            "Público entre 16 e 60 anos",
            "Equipamentos fornecidos",
            "Horários de Sex. à Sab.",
            "3 horas seguidas de aula",
        ],
    },
    {
        id: "2",
        title: "Profissional",
        amountPlanks: 3,
        price: 99.0,
        details: [
            "Experiência de 3 anos no surf",
            "Você deve trazer o equipamento",
            "Horários de Sex. à Sab.",
            "4 horas seguidas de aula",
        ],
    },
]