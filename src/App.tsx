import { TiShoppingCart } from "react-icons/ti";

import ShoppingList from "./components/ShoppingList";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1
          className="
          text-3xl
          font-bold
          mb-6
          flex
          justify-start
          align-middle
          items-start
          m-2"
        >
          <TiShoppingCart className="mx-1" />
          Product Catalogue
        </h1>

        <ShoppingList />
      </div>
    </>
  );
}

export default App;
