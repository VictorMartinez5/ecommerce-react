//Components

import CardDetail from "../../components/CardDetail/CardDetail";

//Hooks
import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";

// FIREBASE
import { db } from "../../firebase/firebaseConfig";
import {collection, query, where, getDocs, documentId } from "firebase/firestore";

const DetailPage = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"),
      where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
    };
    getProducts();
  }, [id]);
  
   return (
    <section>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <CardDetail product={product} />
          </div>

        );
      })}
    </section>
  );
};



export default DetailPage