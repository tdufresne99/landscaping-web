'use cient';

import { IconType } from "react-icons";

interface IconCardProps {
    icon: IconType;
    title: string;
    description?: string;
}

export default function IconCard({
    icon: Icon,
    title,
    description,
}: IconCardProps) {
    return (
        <div className={`flex flex-col justify-center items-center m-4 p-4 text-muted-foreground bg-muted shadow-md max-w-72 lg:max-w-128 min-h-56 lg:min-h-96`}>
            <Icon className="text-4xl lg:text-6xl mb-2" />
            <h3 className="text-xl lg:text-4xl font-semibold mb-1">{title}</h3>
            {description && <p className="text-md text-center lg:p-8">{description}</p>}
        </div>
    );
}