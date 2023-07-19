//Components
import CardProduct from "../../components/CardProduct/CardProduct";
import FiltersSeccion from "../../components/FiltersSeccion/FiltersSeccion";

//Router Dom
import { Link } from "react-router-dom";

//Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ProductsPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "products"),
        where("category", "==", category)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
    };
    getProducts();
  }, [category]);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <FiltersSeccion />

          {/* Porductos */}
          <div className="lg:col-span-3">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => {
                return (
                  <div key={product.id}>
                    <Link to={`/detail/${product.id}`}>
                      <CardProduct product={product} />
                    </Link>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ProductsPage;