type CardProps = {
    children?: React.ReactNode;
    heading?: string;
};

export const Card = ({children, heading}: CardProps) => {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg w-1/3 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
            <div className="px-4 py-5 sm:p-6 flex flex-col">
                {heading && (
                    <h2 className="font-semibold text-2xl text-center pb-4">{heading}</h2>
                )}
                {children}
            </div>
        </div>
    );
}