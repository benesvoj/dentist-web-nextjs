import {
  CooperationConfigProps,
  CooperationProps,
  EmployeeProps,
  InsuranceCompaniesProps,
  OfficeHoursProps,
  PriceListProps,
  ServicesProps,
} from '@/app/(web)/lib/types'

export const website = {
  address: 'E.Beneše 1, 747 05, Opava',
  email: 'ordinace@lsdent.cz',
  phone: '+420 608 204 208',
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
    afternoon: '15:00 - 18:00',
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
    afternoon: 'Zavřeno',
  },
  {
    day: 'Neděle',
    morning: 'Zavřeno',
    afternoon: 'Zavřeno',
  },
]

export const insuranceCompanies: InsuranceCompaniesProps[] = [
  {
    title: 'VZP',
    url: 'https://www.vzp.cz/',
    logo: '/poj-vzp.svg',
  },
  {
    title: 'ČPZP',
    url: 'https://www.cpzp.cz/',
    logo: '/poj-cpzp.png',
  },
  {
    title: 'RBP',
    url: 'https://www.rbp213.cz/',
    logo: '/poj-rbp_reverse.jpg',
  },
  {
    title: 'OZP',
    url: 'https://www.ozp.cz/',
    logo: '/poj-ozp.png',
  },
  {
    title: 'ZPMV',
    url: 'https://www.zpmvcr.cz/',
    logo: '/poj-zpmv.png',
  },
  {
    title: 'VOZP',
    url: 'https://www.vozp.cz/',
    logo: '/poj-vozp.png',
  },
]

export const services: ServicesProps[] = [
  {
    id: 1,
    title: 'Zachovná stomatologie',
    image: '/tooth-solid.svg',
    description: `Záchovná stomatologie je odvětví zubního lékařství, které se snaží pomocí preventivní péče, diagnostiky a následné léčby různých vad zachovat zuby co nejdéle funkční. Někdy se můžeme setkat i s názvem „konzervativní” stomatologie.
Tento obor se zabývá převážně léčbou zubního kazu nebo různých typů úrazů či zranění v dutině ústní a s nimi souvisejícími komplikacemi. Záchovná stomatologie používá pro vyplnění či modelaci buď přímé (zhotoveny lékařem přímo v ústech pacienta) nebo nepřímé (zhotovovány ve spolupráci se zubní laboratoří) výplňové materiály.
\n
Cílem je pomocí nich ošetřit vlastní zuby a doplnit je tak, aby zůstala zachována nejen jejich správná anatomie, funkčnost a pěkný vzhled, ale i co nejdelší životnost. Péče a snaha o co nejdelší udržení vlastních zubů pacienta má vliv na jeho celkové zdraví a spokojenost.
`,
  },
  {
    id: 2,
    title: 'Protetická stomatologie',
    image: '/tooth-solid.svg',
    description:
      'V případě velké ztráty tvrdých zubních tkání, které již nelze rekonstruovat přímo v ústech pacienta pomocí kompozitní výplně, nahrazujeme části zubu inlayí, onlayí nebo korunkou. Protetická stomatologie umožňuje nahradit ztracené části zubů, celé zuby, případně skupiny zubů.',
  },
  {
    id: 3,
    title: 'Ošetření kořenových kanálků',
    image: '/tooth-solid.svg',
    description:
      'Endodontické ošetření znamená ošetření vnitřního prostoru zubu, laicky řečeno ošetření kořenových kanálků zubu. Je nutné ho provést vždy, když dojde v zubní dřeni k patologickému procesu, tedy zánětu nebo odumření, ať už následkem příliš velkého zubního kazu, nebo úrazu.',
  },
  {
    id: 4,
    title: 'Dětská stomatologie',
    image: '/tooth-solid.svg',
    description:
      'Péči o chrup dětí doporučujeme a provádíme od jejich nejútlejšího věku za současné spolupráce rodičů. Děti si tak na nás postupně zvykají ještě v době, kdy nepříjemné zákroky nepotřebují. Dětský pacient je velmi vnímavý na upřímnost a pravdomluvnost nás dospělých. Je proto velmi důležité navození vzájemné důvěry, která umožní hladký průběh případného ošetření. I nespolupracující děti (z důvodu dřívější neblahé zkušenosti nebo strachu z neznámého) tento přístup v dalších návštěvách odměňují úsměvem.',
  },
  {
    id: 5,
    title: 'OPG vyšetření',
    image: '/tooth-solid.svg',
    description:
      'Extraorální snímkovací metoda. Snímek zachycující obě čelisti, chrup, čelistní klouby, čelistní dutiny a dutinu nosní. Zobrazuje horní i dolní zuby čelisti na jednom snímku. Zobrazuje počet, umístění a růst všech zubů, včetně těch, které se zatím plně nevyvinuly nebo v dutině ústní plně neprořezaly. Zobrazí nám obecný přehled o stavu všech přitomných zubů a kosti, v nichž jsou zuby ukotveny.',
  },
]

export const employees: EmployeeProps[] = [
  {
    id: '1',
    name: 'MDDr. Lucie Solná',
    position: 'zubní lékař',
    description:
      'Soustavné postgraduální vzdělávání, pravidelná účast na odborných kurzech a summitech.',
    experience: [
      {id: '1', from: 2006, to: 2011, text: 'Masarykovova Univerzita v Brně, obor Zubní lékařství'},
      {id: '2', from: 2011, to: 2015, text: 'Zaměstnanec privátních zubních ordinací v Opavě a Kravařích'},
      {
        id: '3',
        from: 2015,
        to: 'dnes',
        text: 'Převzetí soukromé stomatologické praxe po MUDr.Martě Černohorské, založení LS dent, s.r.o.',
      },
      {id: '4', from: 2018, to: 'dnes', text: 'Zisk osvědčení „Praktický zubní lékař“'},
    ],
  },
  {
    id: '2',
    name: 'MDDr. Jana Honová',
    position: 'zubní lékař',
    description:
      'Soustavné postgraduální vzdělávání, pravidelná účast na odborných kurzech a summitech.',
    experience: [
      {id: '1', from: 2010, to: 2015, text: 'Masarykovova Univerzita v Brně, obor Zubní lékařství'},
      {id: '2', from: 2016, to: 'dnes', text: 'Zaměstnanec privátní zubní ordinace v Opavě'},
      {id: '3', from: 2018, to: 'dnes', text: 'Zaměstnanec LS dent, s.r.o.'},
    ],
  },
  {
    id: '3',
    name: 'Světlana Veverková',
    position: 'sestra',
    experience: [
      {id: '1', from: 1981, to: 1985, text: 'Střední zdravotnická škola Krnov, obor dětská sestra'},
      {id: '2', from: 1985, to: 2000, text: 'Kojenecký ústav Opava'},
      {id: '3', from: 2000, to: 2002, text: 'Zaměstnanec soukromé stomatologické ordinace MUDr.Vavrečka'},
      {
        id: '4',
        from: 2002,
        to: 2015,
        text: 'Zaměstnanec soukromé stomatologické ordinace MUDr.Černohorská',
      },
      {id: '5', from: 2015, to: 2018, text: 'Zaměstnanec soukromé stomatologické ordinace MUDr.Rybová'},
      {
        id: '6',
        from: 2018,
        to: 'dnes',
        text: 'Zaměstnanec soukromé stomatologické ordinace LS dent, s.r.o.',
      },
    ],
  },
]

export const priceList: PriceListProps[] = [
  {id: '1', title: 'Vstupní vyšetření', price: 'Hrazeno ZP'},
  {id: '2', title: 'Preventivní prohlídka (1x ročně dospělí, 2x ročně děti)', price: 'Hrazeno ZP'},
  {id: '3', title: 'Digitalní snímkování RTG a OPG', price: 'Hrazeno ZP'},
  {id: '4', title: 'Vyhodnocení snímků', price: 'Hrazeno ZP'},
  {id: '5', title: 'Lokální anestezie', price: 'Hrazeno ZP'},
  {id: '6', title: 'Konzultace', price: 'od 300 Kč'},
  {id: '7', title: 'Fotokompozitní(bílé) výplně', price: 'od 1 100 Kč'},
  {id: '8', title: 'Skloionomerní výplně', price: 'od 500 Kč'},
  {id: '9', title: 'Kapslový amalgám (černá výplň)', price: 'Hrazeno ZP'},
  {id: '10', title: 'Endodoncie (ošetření kořenových kanálků)', price: 'od 1 000 Kč'},
  {id: '11', title: 'Kofferdam', price: '200 Kč'},
  {id: '12', title: 'Celokeramická korunka', price: 'od 4 300 Kč'},
  {id: '13', title: 'Metalokeramická korunka', price: 'od 4 500 Kč'},
  {id: '14', title: 'Fazetová korunka', price: ''},
  {id: '15', title: 'Provizorní korunka', price: 'od 1 000 Kč'},
  {id: '16', title: 'Provizorní můstek', price: 'od 4 000 Kč'},
  {id: '17', title: 'Provizorní snímací protéza', price: 'od 4 500 Kč'},
  {id: '18', title: 'Snímací protéza', price: 'od 5 500 Kč'},
  {id: '19', title: 'Domácí bělení', price: 'od 4 000 Kč'},
  {id: '20', title: 'Vnitřní bělení', price: 'od 1 000 Kč'},
  {id: '21', title: 'Kolagenová dentální kuželka', price: '200 Kč'},
  {id: '22', title: 'Kolagenová dentální kuželka s ATB', price: '400 Kč'},
  {id: '23', title: 'Chirurgické šití', price: '200 Kč'},
]

export const cooperation: CooperationProps[] = [
  {
    id: '1',
    type: 'lab',
    title: 'Tomáš Onderka',
    description: 'fixní protetické práce',
    address: 'Švermova 219, Vítkov 749 01',
    phone: '+420 773 998 181',
    email: 'tomas.onderka.zl@gmail.com',
    www: 'www.tomasonderka.com',
  },
  {
    id: '2',
    type: 'lab',
    title: 'Ivana Stiborská',
    description: 'snímatelné protetické práce',
    address: 'E.Beneše 1, Opava 747 05',
    phone: '+420 553 627 828',
  },
  {
    id: '3',
    type: 'lab',
    title: 'Blažena Vokřálová',
    description: 'snímatelné protetické práce',
    address: 'Partyzánská 229, Budišov nad Budišovkou 747 87',
    phone: '+420 604 593 322',
  },
  {
    id: '4',
    type: 'stoma',
    title: 'Zubní chirurgie s.r.o.',
    description: 'chirurgické výkony',
    address: 'Slezská nemocnice Opava, Olomoucká 470/86, Opava 746 01',
    phone: '+420 773 998 181',
    www: 'www.zchopava.cz',
  },
  {
    id: '5',
    type: 'orto',
    title: 'BellaDente',
    description: 'MUDr. Zdeněk Micek, ml.',
    address: 'Nám.republiky 198/2, Opava 746 01',
    phone: '+420 725 393 141',
    email: 'info@belladente.cz',
    www: 'www.belladente.cz',
  },
  {
    id: '6',
    type: 'orto',
    title: 'MUDr. Martina Gebauerová',
    address: 'Rolnická 1A, Opava 747 05',
    phone: '+420 777 509 995',
    email: 'info@ortodoncie-opava.cz',
    www: 'www.ortodoncie-opava.cz',
  },
  {
    id: '7',
    type: 'para',
    title: 'MUDr. Jitka Fischerová',
    address: 'Žižkova 8, Opava 746 01',
    phone: '+420 606 049 442',
    email: 'info@zubaropava.cz',
    www: 'www.zubaropava.cz',
  },
  {
    id: '8',
    type: 'dentalhygiene',
    title: 'Bc. Ilona Cabadajová',
    address: 'Nám.slezského odboje 1540/3, Opava 746 01',
    phone: '+420 799 797 300',
    email: 'info@dhopava.cz',
    www: 'www.dhopava.cz',
  },
]

export const CooperationConfig: CooperationConfigProps[] = [
  {id: '1', title: 'Laboratoře', data: cooperation, type: 'lab'},
  {id: '2', title: 'Stomatochirurgie', data: cooperation, type: 'stoma'},
  {id: '3', title: 'Ortodoncie', data: cooperation, type: 'orto'},
  {id: '4', title: 'Paradontologie', data: cooperation, type: 'para'},
  {id: '5', title: 'Dentální hygiena', data: cooperation, type: 'dentalhygiene'},
]
