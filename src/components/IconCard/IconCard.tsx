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
        <div className={`flex flex-col items-center m-4 p-4 bg-muted rounded-lg shadow-md`}>
            <Icon className="text-4xl text-muted-foreground mb-2" />
            <h3 className="text-xl text-muted-foreground font-semibold mb-1">{title}</h3>
            {description && <p className="text-md text-dark text-center">{description}</p>}
        </div>
    );
}