import React, { useState, useEffect } from "react";
import { getData } from "./utils/getData";
const Context = React.createContext();

/* Will bring in data and give it to components that need them*/
function ContextProvider({ children }) {
  const [globalDataX, setGlobalDataX] = useState([]);
  const [globalDataY, setGlobalDataY] = useState([]);
  const [dailyNewDataY, setDailyNewDataY] = useState([]);

  const url =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        const { dates, cases_sum, daily_new } = getData(data);
        setGlobalDataX(dates);
        setGlobalDataY(cases_sum);
        setDailyNewDataY(daily_new);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        globalDataX,
        globalDataY,
        dailyNewDataY,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
