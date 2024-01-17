import Image from 'next/image'

export const Logo = () => {
  return (
    <>
      <Image
        src="/lsdent_logo_icon.png"
        alt="LS dent logo"
        width={0}
        height={0}
        sizes={'100wh'}
        priority
        className="rounded-full w-1/4 h-auto"
      />
      <div className="flex-col">
        <h1 className="font-semibold text-3xl">LS dent, s.r.o.</h1>
        <div className="text-sm">Praktický zubní lékař v Opavě</div>
      </div>
    </>
  )
}
