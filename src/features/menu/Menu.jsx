import { useLoaderData } from "react-router-dom";
import { getMenu } from "../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <h1>
      <ul>
        {menu.map((pizza) => {
          return <MenuItem pizza={pizza} key={pizza.id} />;
        })}
      </ul>
    </h1>
  );
}

export async function loader() {
  const data = await getMenu();
  return data;
}

export default Menu;
