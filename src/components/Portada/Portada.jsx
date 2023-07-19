//Rouuter
import {Link} from "react-router-dom"

//Imagenes
import Hoddies from "../../assets/img/hoddies.jpg"
import Remeras from "../../assets/img/remeras.jpg"
import Camperas from "../../assets/img/camperas.jpg"

const Portada = () => {
  return (
    <section>
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
    <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
      <li>
        <Link to="/products/campera" className="relative block group">
          <img
            src={Camperas}
            alt="Camperas"
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            className="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 className="text-xl font-medium text-white">Camperas</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </Link>
      </li>

      <li>
        <Link to="/products/remera" className="relative block group">
          <img
            src={Remeras}
            alt="Remeras"
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            className="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 className="text-xl font-medium text-white">Remeras</h3>

            <span 
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </Link>
      </li>

      <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <Link to="/products/hoddie" className="relative block group">
          <img
            src={Hoddies}
            alt="Hoddies"
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            className="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 className="text-xl font-medium text-white">Hoddies</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </Link>
      </li>
    </ul>
  </div>
</section>
  )
}

export default Portada