import { useState, useEffect } from "react";

const useTime = (type: "hour" | "day") => {
    const [value, setValue] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            if (type === "hour"){
                setValue(date.getHours().toString());
            } else if (type === "day"){
                setValue(new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date));
            }
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);

        return () => clearInterval(interval);
    }, [type]);

    return value;
};

export default useTime;