import {PageHeading} from "@/app/ui/PageHeading";

type PageBodyProps = {
    title: string;
    children?: React.ReactNode;
}

export const PageBody = ({title, children}: PageBodyProps) => {
    return (
        <div className={'flex w-full h-min flex-col max-w-5xl'}>
            <PageHeading title={title}/>
            {children &&
                <div className={'w-full'}>
                    {children}
                </div>
            }
        </div>
    )
}