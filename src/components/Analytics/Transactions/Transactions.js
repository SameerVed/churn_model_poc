import axios from "axios";
import React, { useEffect, useState } from "react";
import { readRemoteFile } from "react-papaparse";
import { READ_TRANSACTIONS_PATH } from "../../../apis/ApiConstants";
import Charts from "../../Chart";

function Transactions() {
  const [transactionsData, setTransactionsData] = useState([]);
  const [loading, setLoader] = useState(false);
  const parseTxnData = () => {
    readRemoteFile("mock/transactions.csv", {
      dynamicTyping: true,
      complete: (results) => {
        setTransactionsData(results.data);
      },
    });
  };
  useEffect(() => {
    // let data = axios
    //   .get(READ_TRANSACTIONS_PATH)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    parseTxnData();
    return () => {};
  }, []);

  return (
    <div>
      {console.log("RENDERED:", transactionsData)}
      {<Charts data={transactionsData} chartType={"LineChart"} />}
    </div>
  );
}

export default Transactions;
