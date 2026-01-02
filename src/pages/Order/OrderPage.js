import React from "react";
import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFail } from "./components/OrderFail";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";

export const OrderPage = () => {
  useTitle("Order Summary");
  const { state } = useLocation();

  return state.status ? <OrderSuccess data={state.data} /> : <OrderFail />;
};
