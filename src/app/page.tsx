import Image from 'next/image'
import {Card} from "@/app/ui/Card";
import {OfficeHoursTable} from "@/app/ui/OfficeHoursTable";
import {insuranceCompanies, officeHours} from "@/app/lib/website";
import Link from "next/link";

export default function Home() {
    const data = Array.isArray(officeHours) ? officeHours : []

    return (
        <>
            <div
                className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>
            <Card heading={'Informace pro pacienty'}>
                NOVÍ PACIENTI:
                <p>Nové pacienty z kapacitních důvodů nepřijímáme.</p>
                <p>Pokud se nemůžete dostavit na termín ošetření nebo se chcete objednat a nedovoláte se, prosíme o
                    informaci prostřednictvím SMS!</p>
            </Card>
            <Card heading={'Ordinační doba'}>
                <OfficeHoursTable rows={data}/>
                <p className={'font-bold py-2'}>Provozní doba začíná hodinu před ordinační dobou.</p>
                <p className={'font-bold'}>Omezený provoz ordinace z důvodu mateřské dovolené.</p>
            </Card>
            <Card heading={'Pojistovny'}>
                <p>Ordinace je smluvním poskytovatelem pro všechny zdravotní pojišťovny.</p>
                <div className={'flex flex-row flex-wrap gap-4 justify-center py-4 items-center'}>
                    {insuranceCompanies.map(({title, url, logo}, index) => (
                            <Link href={url} key={index} target='_blank'>
                                <Image src={logo} alt={title} width={0} height={0} sizes={'50wh'} className="w-28 h-auto"/>
                            </Link>
                        )
                    )}
                </div>
            </Card>
        </>
    )
}
