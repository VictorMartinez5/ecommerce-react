import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "flowbite-react";
import ModalProduct from "../ModalProduct/ModalProduct";
import { useCart } from "../hook/useCart";

export default function DefaultModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { removeFromCart } = useCart()

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>
        <i className="bi bi-bag ">1</i>
      </Button>
      <Modal show={isModalOpen} onClose={closeModal}>
        <Modal.Header>Carrito</Modal.Header>

        <Modal.Body>
          <div className="relative w-screen max-w-sm border  bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mt-4 space-y-6">
              <ul className="space-y-4">
                <ModalProduct />
              </ul>

              <div className="space-y-4 text-center">
                <Link
                  to="/shop"
                  onClick={closeModal}
                  className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
                >
                  Iniciar Mi Compra (2)
                </Link>

                <button
                  onClick={()=> removeFromCart()}
                  to="/shop"
                  className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
                >
                  Limpiar Carrito
                </button>

                <button
                  onClick={closeModal}
                  to="/shop"
                  className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                >
                  Continue shopping
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
