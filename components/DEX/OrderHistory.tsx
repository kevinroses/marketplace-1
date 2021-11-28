import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { apiLinkState } from "../../atoms";
import { OrderHistoryElement } from "./OrderHistoryElement";

export const OrderHistory = ({
  type,
  coin,
}: {
  coin: "HIVE" | "HBD";
  type: "buy" | "sell";
}) => {
  const [orders, setOrders] = useState<any>([]);
  const [totalSum, setTotalSum] = useState<any>(0);
  const apiLink: string = useRecoilValue(apiLinkState);

  useEffect(() => {
    axios.get(`${apiLink}dex`).then(({ data: { markets } }) => {
      if (coin === "HIVE" && type === "buy") {
        setOrders(markets.hive.buys);
      } else if (coin === "HBD" && type === "buy") {
        setOrders(markets.hbd.buys);
      } else if (coin === "HIVE" && type === "sell") {
        setOrders(markets.hive.sells);
      } else if (coin === "HBD" && type === "sell") {
        setOrders(markets.hbd.sell);
      }
    });
  }, [coin]);

  return (
    <div className="text-white text-xl">
      <div className="flex gap-3">
        <h1 className={type === "sell" ? "text-red-500" : "text-green-500"}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h1>
        <h1>orders</h1>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-3">
        <h1>TOTAL</h1>
        <h1>{coin}</h1>
        <h1>DLUX</h1>
        <h1>{type === "sell" ? "ASK" : "BID"}</h1>
      </div>
      <div className="mt-2">
        {orders &&
          orders.map((order: any, i: number) => (
            <OrderHistoryElement i={i} order={order} orders={orders} />
          ))}
      </div>
    </div>
  );
};
