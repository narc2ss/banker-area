import React, { useEffect } from "react";
import IdeaCardContainer from "../containers/IdeaCardContainer";
import { useSelector, useDispatch } from "react-redux";
import { getPurchaseList } from "../modules/my";

const Bought = () => {
  const { loading, data, error } = useSelector((state) => state.my);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPurchaseList());
  }, [dispatch]);

  if (loading) return <h1>구매목록 로딩중.</h1>;
  if (error) return <h1>구매목록 에러 발생!</h1>;
  if (!data) return <h1>구매목록 데이터 없음!</h1>;
  return (
    <>
      <IdeaCardContainer ideaCards={data.data} />
    </>
  );
};

export default Bought;
