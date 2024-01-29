import { useState, useEffect } from 'react';

export function DynamicText({texts, speed}){
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const [speedText, setSpeedText] = useState(speed);
    const [speedDelete] = useState(speed/2);
    const [cooldown, setCooldown] = useState(false); // New state variable for cooldown

    useEffect(() => {
        let timeout;
        if (!cooldown) {
            timeout = setTimeout(() => {
                if(!isDeleting && text.length === texts[index].length){
                    setIsDeleting(true);
                    setSpeedText(speedDelete);
                    setCooldown(true); // Start cooldown when text is completely written
                    setTimeout(() => setCooldown(false), 1000); // Reset cooldown after 1 second
                }else if(isDeleting && text.length === 0){
                    setIsDeleting(false);
                    setSpeedText(speed);
                    setIndex((index + 1) % texts.length);
                }
                setText(texts[index].substring(0, isDeleting ? text.length - 1 : text.length + 1));
            }, isDeleting ? speedDelete : speedText);
        }
        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, speedText, speedDelete, texts, speed, cooldown]); // Add cooldown to dependency array

    return (
        <>{text}</>
    )
}