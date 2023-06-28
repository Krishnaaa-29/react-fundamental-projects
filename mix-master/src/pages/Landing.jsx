import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
  const newUrl = new URL(request.url);

  const search = newUrl.searchParams.get("search") || "";
  const resp = await axios.get(`${url}${search}`);
  return { drinks: resp.data.drinks, search };
};

const Landing = () => {
  const { drinks, search } = useLoaderData();

  return (
    <div>
      <SearchForm search={search} />
      <CocktailList drinks={drinks} />
    </div>
  );
};
export default Landing;
