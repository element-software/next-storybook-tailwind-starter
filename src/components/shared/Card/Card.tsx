import classNames from "classnames";

export interface CardProps {
    children: React.ReactNode;
    className?: string;
}


const Card = ({ children, className }: CardProps) => (
    <div className={classNames("text-sm flex flex-col items-center justify-center mb-4 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-md p-2", className)}>
        {children}
    </div>
)

export default Card;