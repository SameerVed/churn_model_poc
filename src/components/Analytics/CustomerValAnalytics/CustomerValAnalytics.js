import React, { useEffect, useState } from "react";
import { readRemoteFile } from "react-papaparse";
import Charts from "../../Chart";
import CustomerValLifetime from "../../Table/CustomerValLifetime/CustomerValLifetime";

function CustomerValAnalytics() {
  const [transactionsData, setTransactionsData] = useState([]);
  const [loading, setLoader] = useState(false);
  const parseTxnData = () =>
    readRemoteFile("mock/customerLifetimeValueDataFinal.csv", {
      dynamicTyping: true,
      complete: (results) => {
        setTransactionsData(results.data);
      },
    });

  useEffect(() => {
    // let data = axios
    //   .get(READ_TRANSACTIONS_PATH)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    parseTxnData();
    return () => {};
  }, []);
  return (
    <div>{<Charts data={transactionsData} chartType={"LineChart"} />}</div>
  );
}

export default CustomerValAnalytics;
