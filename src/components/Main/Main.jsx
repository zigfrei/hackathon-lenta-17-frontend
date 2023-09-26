import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Header from "../Header/Header";
import { getUser } from "../../services/slices/userSlice";

function Main() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  console.log(user);

  return <Header />;
}

export default Main;
