import { useLoaderData } from "react-router-dom";
import { getMenu } from "../services/apiRestaurant";
function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return <h1>Menu</h1>;
}

export async function loader() {
  const data = await getMenu();
  return data;
}

export default Menu;
