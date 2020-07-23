import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPurchaseList } from "../modules/purchase";

const PurchaseSuccess = () => {
  const { loading, result, error } = useSelector((state) => state.purchase);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestPurchaseList(localStorage.getItem("purchaseList")));
  }, [dispatch]);
  if (loading) return <h1>로딩중!</h1>;
  if (error) return <h1>결제 에러 발생!</h1>;

  return <h1>결제완료!</h1>;
};

export default PurchaseSuccess;
