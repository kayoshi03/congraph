import Graph from "./components/Graph/Graph";
import {useEffect, useState} from "react";
import axios from "axios";

const App = () =>  {
    const [contribution, setContribution] = useState([])
    const currentDate = new Date()


    const getContribution = async () => {
        const res = await axios.get("https://dpg.gg/test/calendar.json")
        setContribution(res.data)
    }

    useEffect(() => {
        getContribution()
    },[])


    return (
    <>
      <Graph currentDate={currentDate} contribution={contribution} />
    </>
  );
}

export default App;
