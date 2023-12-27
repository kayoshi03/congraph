import "./style.scss"
import {useEffect, useState} from "react";
import moment from "moment/moment";
const Cell = ({ x, con, arr }) => {
    const [color, setColor] = useState(con || "none");
    const [score, setScore] = useState(0)
    const [showTool, setShowTool] = useState(false)

    moment.locale('ru')

    useEffect(() => {
        if (con) {
            const state = arr[con];
            setScore(arr[con])
            const newColor =
                state >= 1 && state <= 9 ? "con" :
                    state >= 10 && state <= 19 ? "con10" :
                        state >= 20 && state <= 29 ? "con20" :
                            state > 29 ? "con30" :
                                "none";

            setColor(newColor);
        }
    }, [con, arr]);
    const showToolTip = () => {
        setShowTool(!showTool)
    }
    const onClose = () => {
        setShowTool(false)
    }
    const dayWeek = moment(x).format("dddd").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const Mouths = moment(x).format("MMMM").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const day = moment(x).format("D").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const year = moment(x).format("Y").split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const string = dayWeek + ", " + Mouths + " " + day + ", " + year
    console.log(string)





    return (
        <td onBlur={onClose} onClick={showToolTip} className={`cell ${color} ${showTool ? "clicked" : ""}`}>
            {
                showTool ?
                    <div className="tooltip">
                        <h1>{score} contributions </h1>
                        <p>
                            {string}
                        </p>
                        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="corner" d="M4.5 6L0.169873 1.38009e-07L8.83013 8.95112e-07L4.5 6Z" fill="black"/>
                        </svg>

                    </div>
                    :
                    <></>
            }
        </td>
    );
};

export default Cell