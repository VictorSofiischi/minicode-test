import { SelectValue } from "@/components/shared/select";
import { AutoTypes } from "../types";

export const typeArray: AutoTypes[] = [
    {
        value: "auto",
        title: "Autoturism cu pînă la 9 locuri",
        icon: "car"
    },
    {
        value: "bus",
        title: "Autovehicule destinate transportului de pers...",
        icon: "bus"
    },
    {
        value: "tractor",
        title: "Tractoare rutiere avind puterea motorului",
        icon: "tractor"
    },
    {
        value: "truck",
        title: "Camioane si alte autovehicule a caror m...",
        icon: "truck"
    },
    {
        value: "bike",
        title: "Motocicleta",
        icon: "bike"
    },
]

export const localitati: SelectValue[] = [
    {
        label: 'Chisinau',
        value: 'Chisinau'
    },
    {
        label: 'Drochia',
        value: 'Drochia'
    },
    {
        label: 'Riscani',
        value: 'Riscani'
    }
]

export const personPosessor: SelectValue[] = [
    {
        label: 'Da',
        value: 'yes'
    },
    {
        label: 'Nu',
        value: 'no'
    },
]

export const numberAdmissible: SelectValue[] = [
    {
        label: '1',
        value: '1'
    },
    {
        label: '2',
        value: '2'
    },
    {
        label: '3',
        value: '3'
    },
    {
        label: 'Mai multe',
        value: 'more'
    },
]

export const stagiu: SelectValue[] = [
    {
        label: '1 an',
        value: '1'
    },
    {
        label: '2 ani',
        value: '2'
    },
    {
        label: '3 ani',
        value: '3'
    },
    {
        label: 'Mai mult',
        value: 'more'
    },
]

