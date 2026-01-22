import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";

export default function Content() {

    const location = useLocation();
    const [currentOpacity, setCurrentOpacity] = useState(0);
    const [targetOpacity, setTargetOpacity] = useState(1);

    useEffect(() => {
        setCurrentOpacity(0);
        setTargetOpacity(1);
    }, [location]);

    useEffect(() => {
        if(currentOpacity < targetOpacity) {
            setTimeout(() => {
                setCurrentOpacity((prev) => Math.min(prev + 0.1, targetOpacity));
            }, 50);
        }
    }, [targetOpacity, currentOpacity]);

    return (
        <div style={{opacity: currentOpacity, width: '100%'}}>
            <Outlet/>
        </div>
    );
}