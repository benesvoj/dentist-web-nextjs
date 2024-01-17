import Image from "next/image";

export const Logo = () => {
    return (
        <>
            <Image
                src="/lsdent_logo_icon.png"
                alt="LS dent logo"
                width={100}
                height={100}
                priority
                className="rounded-full"
            />
            <div className="flex-col">
                <h1 className="font-semibold text-3xl">LS dent, s.r.o.</h1>
                <div className="text-sm">
                    Praktický zubní lékař v Opavě
                </div>
            </div>
        </>
    )
}