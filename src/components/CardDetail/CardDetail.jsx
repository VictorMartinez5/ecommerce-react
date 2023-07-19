import { useCart } from "../hook/useCart.js";

const CardDetail = ({ product }) => {
 const { addToCart } = useCart()

  return (
    <div className="relative mx-auto max-w-screen-xl px-4 py-8">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
          <img alt="Les Paul" src={product.img1} />

          <div className="grid grid-cols-2 gap-4 lg:mt-4">
            <img alt={product.nombre} src={product.img1} />

            <img alt={product.nombre} src={product.img2} />
          </div>
        </div>

        <div className="sticky top-0">
          <div className="mt-8 flex justify-between">
            <div className="max-w-[35ch] space-y-2">
              <h1 className="text-xl font-bold sm:text-2xl">
                {product.nombre}
              </h1>
            </div>

            <p className="text-lg font-bold">{`$${product.price}`}</p>
          </div>

          <div className="mt-4">
            <div className="prose max-w-none">
              <p>{product.descripcion}</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="mb-1 text-sm font-medium">Color</p>

            <div className="flex flex-wrap gap-1">
              <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                {product.color}
              </span>
            </div>

            <div className="mt-4">
              <p className="mb-1 text-sm font-medium">Size</p>

              <div className="flex flex-wrap gap-1">
                <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                  {product.talle}
                </span>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <div>
                <label htmlFor="quantity" className="sr-only">
                  Qty
                </label>

                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value="1"
                  className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                />
              </div>

              <button onClick={()=> addToCart()}
                type="submit"
                className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
