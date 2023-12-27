import React from 'react';
import Cell from "../Cell/Cell";
import moment from "moment/moment";
import 'moment/locale/ru'

const Col = ({weeks, contribution}) => {
    const dayNames = ["ПН","","СР","", "ПТ"]
    const mouth = ["Янв","Февр","Март","Апр","Май","Июнь","Июль","Авг","Сент","Окт","Нояб","Дек"]
    moment.locale('ru')
    return (
        <table className="col">
            <thead>
                {
                    mouth.map((item) => (
                        <p>{item}</p>
                    ))
                }
            </thead>
            <tbody>
            {weeks.map((dates, day) => (
                <tr key={day}>
                    <td><p>{dayNames[day]}</p></td>
                    {dates.reverse().map((date, index) => (
                        <Cell key={index} x={date} arr={contribution}
                              con={Object.keys(contribution).find((con) => moment(con).format("DD.MM.YYYY") === date.toLocaleDateString())}/>
                    ))}
                </tr>
            ))}
            </tbody>
            <tfoot className="testCon">
                <p>Меньше</p>
                <div className="listCell">
                    <div className="cell none"/>
                    <div className="cell con"/>
                    <div className="cell con10"/>
                    <div className="cell con20"/>
                    <div className="cell con30"/>
                </div>
                <p>Больше</p>
            </tfoot>
        </table>


    )
};

export default Col;