import "./style.scss"
import Col from "./Col/Col";
const Graph = ({currentDate, contribution}) => {
    function weeks() {
        const prevDate = Array.from({ length: 361 }, (_, index) =>
            new Date(currentDate.getTime() - (24 * 60 * 60 * 1000 * index))
        );

        const groupedDates = prevDate.reduce((acc, date) => {
            const day = date.getDay();
            acc[day] = acc[day] || [];
            acc[day].push(date);
            return acc;
        }, []);
        return groupedDates;
    }

    return (
        <>
            <Col weeks={weeks()} contribution={contribution}/>

        </>

    );
}
export default Graph