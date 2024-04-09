import { useEffect, useState } from "react";


export const useResize = () => {
    const [windowWidth, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = (event: any) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        windowWidth,
    };
};