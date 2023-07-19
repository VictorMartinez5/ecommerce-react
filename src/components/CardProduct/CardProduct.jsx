/* eslint-disable react/prop-types */

const CardProduct = ({ product } ) => {
  return (
<>
    <a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src={product.img1}
      alt={product.name}
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
      />

    <img
      src={product.img2}
      alt={product.name}
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3
      className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4"
    >
      {product.nombre}
    </h3>

    <p className="mt-1.5 tracking-wide text-gray-900">{`$${product.price}`}</p>
  </div>
</a>
      </>
  )
}

export default CardProduct