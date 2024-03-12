import { ButtonHTMLAttributes, ReactNode } from 'react';
interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    width?: "w-full" | "w-fit";
}

const Button = ( { children, className, width = "w-full", ...rest }: Iprops ) => {
    console.log( rest );

    return (
        <button className={ `${className} ${width} p-2 text-white font-bold w-full rounded-md` } { ...rest }>
            { children }
        </button>
    );
};

export default Button;