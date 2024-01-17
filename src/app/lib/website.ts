import {OfficeHoursProps} from "@/app/lib/types";

export const website = {
    address: 'E.Beneše 1, 747 05, Opava',
    email: 'ordinace@lsdent.cz',
    phone: '+420 608 204 208'
}

export const officeHours: OfficeHoursProps[] = [
    {
        day: 'Pondělí',
        morning: '8:00 - 10:30',
    },
    {
        day: 'Úterý',
        morning: '8:00 - 10:30',
    },
    {
        day: 'Středa',
        afternoon: '15:00 - 18:00'
    },
    {
        day: 'Čtvrtek',
        morning: '8:00 - 10:30',
    },
    {
        day: 'Pátek',
        morning: '8:00 - 10:30',
    },
    {
        day: 'Sobota',
        morning: 'Zavřeno',
        afternoon: 'Zavřeno'
    },
    {
        day: 'Neděle',
        morning: 'Zavřeno',
        afternoon: 'Zavřeno'
    },
]