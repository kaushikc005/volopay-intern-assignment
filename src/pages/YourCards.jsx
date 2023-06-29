import { useParams } from "react-router-dom";
import Cards from "../components/Cards";

const YourCards = ({ data }) => {
  const id = useParams().id;
  const yourData = data?.filter(
    (item) => parseInt(item.owner_id) === parseInt(id)
  );

  return (
    <section className="lg:grid grid-cols-3 mx-auto  z-0 absolute top-52 lg:right-32">
      {yourData.map((item, index) => (
        <Cards item={item} key={index} />
      ))}
    </section>
  );
};

export default YourCards;
