import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailQuery = (search) => {
  return {
    queryKey: ["search", search || "all"],
    queryFn: async () => {
      const resp = await axios.get(`${url}${search}`);
      return resp.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const newUrl = new URL(request.url);
    const search = newUrl.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchCocktailQuery(search));
    return { search };
  };

const Landing = () => {
  const { search } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailQuery(search));
  return (
    <div>
      <SearchForm search={search} />
      <CocktailList drinks={drinks} />
    </div>
  );
};
export default Landing;
