import me from "../../assets/images/me.png";
import "./greeting.css";
import {DynamicText} from "../dynamicText/dynamicText.jsx";

export function Greeting(){
    const titles = ["développeur", "pilote", "designer"];
    const speed = 85;
    const isEvening = () => {
        if (new Date().getHours() >= 17) {
            return true;
        }
    }

    return (
        <>
            <div className="greeting">
                <div className="greeting-left">
                    <h1>{isEvening()?"Bonsoir":"Bonjour"}, je suis Ayoub,</h1>
                    <h2>un <DynamicText texts={titles} speed={speed}/>|</h2>
                </div>
                <div className="greeting-right">
                    <img src={me} alt="Picture of me"/>
                </div>
            </div>
        </>
    );
}
