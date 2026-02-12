import { useParams } from "react-router-dom";
import useCoinDetail from "../../hooks/useCoinDetail";

const Detail = () => {
  const id = useParams();
  useCoinDetail(id);
  const { loading, error, coin, refreshing } = useCoinDetail(id);
  return <div>Detail</div>;
};

export default Detail;
