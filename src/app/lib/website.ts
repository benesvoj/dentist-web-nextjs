import {InsuranceCompaniesProps, OfficeHoursProps, ServicesProps} from "@/app/lib/types";

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

export const insuranceCompanies: InsuranceCompaniesProps[] = [
    {
        title: 'VZP',
        url: 'https://www.vzp.cz/',
        logo: '/poj-vzp.png'
    },
    {
        title: 'ČPZP',
        url: 'https://www.cpzp.cz/',
        logo: '/poj-cpzp.png'
    },
    {
        title: 'RBP',
        url: 'https://www.rbp213.cz/',
        logo: '/poj-rbp.jpeg'
    },
    {
        title: 'OZP',
        url: 'https://www.ozp.cz/',
        logo: '/poj-ozp.png'
    },
    {
        title: 'ZPMV',
        url: 'https://www.zpmvcr.cz/',
        logo: '/poj-zpmv.png'
    },
    {
        title: 'VOZP',
        url: 'https://www.vozp.cz/',
        logo: '/poj-vozp.png'
    }
]

export const services: ServicesProps[] = [
    {
        title: 'Zachovná stomatologie',
        image: '/tooth-solid.svg',
        description: `Záchovná stomatologie je odvětví zubního lékařství, které se snaží pomocí preventivní péče, diagnostiky a následné léčby různých vad zachovat zuby co nejdéle funkční. Někdy se můžeme setkat i s názvem „konzervativní” stomatologie.
Tento obor se zabývá převážně léčbou zubního kazu nebo různých typů úrazů či zranění v dutině ústní a s nimi souvisejícími komplikacemi. Záchovná stomatologie používá pro vyplnění či modelaci buď přímé (zhotoveny lékařem přímo v ústech pacienta) nebo nepřímé (zhotovovány ve spolupráci se zubní laboratoří) výplňové materiály.
\n
Cílem je pomocí nich ošetřit vlastní zuby a doplnit je tak, aby zůstala zachována nejen jejich správná anatomie, funkčnost a pěkný vzhled, ale i co nejdelší životnost. Péče a snaha o co nejdelší udržení vlastních zubů pacienta má vliv na jeho celkové zdraví a spokojenost.
`
    },
    {
        title: 'Protetická stomatologie',
        image: '/tooth-solid.svg',
        description: 'V případě velké ztráty tvrdých zubních tkání, které již nelze rekonstruovat přímo v ústech pacienta pomocí kompozitní výplně, nahrazujeme části zubu inlayí, onlayí nebo korunkou. Protetická stomatologie umožňuje nahradit ztracené části zubů, celé zuby, případně skupiny zubů.'
    },
    {
        title: 'Ošetření kořenových kanálků',
        image: '/tooth-solid.svg',
        description: 'Endodontické ošetření znamená ošetření vnitřního prostoru zubu, laicky řečeno ošetření kořenových kanálků zubu. Je nutné ho provést vždy, když dojde v zubní dřeni k patologickému procesu, tedy zánětu nebo odumření, ať už následkem příliš velkého zubního kazu, nebo úrazu.'
    },
    {
        title: 'Dětská stomatologie',
        image: '/tooth-solid.svg',
        description: 'Péči o chrup dětí doporučujeme a provádíme od jejich nejútlejšího věku za současné spolupráce rodičů. Děti si tak na nás postupně zvykají ještě v době, kdy nepříjemné zákroky nepotřebují. Dětský pacient je velmi vnímavý na upřímnost a pravdomluvnost nás dospělých. Je proto velmi důležité navození vzájemné důvěry, která umožní hladký průběh případného ošetření. I nespolupracující děti (z důvodu dřívější neblahé zkušenosti nebo strachu z neznámého) tento přístup v dalších návštěvách odměňují úsměvem.'
    },
    {
        title: 'OPG vyšetření',
        image: '/tooth-solid.svg',
        description: 'Extraorální snímkovací metoda. Snímek zachycující obě čelisti, chrup, čelistní klouby, čelistní dutiny a dutinu nosní. Zobrazuje horní i dolní zuby čelisti na jednom snímku. Zobrazuje počet, umístění a růst všech zubů, včetně těch, které se zatím plně nevyvinuly nebo v dutině ústní plně neprořezaly. Zobrazí nám obecný přehled o stavu všech přitomných zubů a kosti, v nichž jsou zuby ukotveny.'
    },
]