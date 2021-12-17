import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../Table";

const CustomerValLifetime = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    axios.get("/mock/customerLifetimeValData.json").then((res) => {
      return setLoader(false), setData(res.data);
    });
  }, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Customer Id",
        accessor: "CustomerID",
      },

      {
        Header: "Recency",
        accessor: "Recency",
      },
      {
        Header: "Recency Cluster",
        accessor: "Recency Cluster",
      },

      {
        Header: "Frequency",
        accessor: "Frequency",
      },
    ],
    []
  );

  const tableData = React.useMemo(() => data, []);
  let content;
  if (isLoading) content = <div> "loading"</div>;
  if (!isLoading) content = <Table data={data} columns={columns} />;
  return <div>{content}</div>;
};

export default CustomerValLifetime;
