import { Link } from "react-router-dom";
import { formatPrice } from "../../helpers/number";

const CardProduct = ({ product }) => {
  return (
    <div className="min-h-[10rem] w-72 overflow-hidden rounded-md bg-white text-gray-700 shadow-lg">
      <div className="lg:aspect-none min-h-40 aspect-auto w-full overflow-hidden rounded-md bg-gray-200 lg:h-40">
        <Link to={`/productos/${product.id}`}>
          <img
            className="h-full w-full object-cover object-center lg:h-40 lg:w-full"
            src={product.images[0]}
          />
        </Link>
      </div>
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            stock ready
          </span>
          <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
            official store
          </span>
        </div>
        <div>
          <Link to={`/productos/${product.id}`}>
            <h2 className="font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">
              {product.product_name}
            </h2>
          </Link>
        </div>
        <div>
          <span className="text-xl font-bold">{formatPrice(product.price)}</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line-through opacity-50">
              {formatPrice((product.price * 10) / 8)}
            </span>
            <span className="bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white">
              save 20%
            </span>
          </div>
        </div>
        <span className="flex items-center mt-1">
          <img
            src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png"
            width="15"
          />
          <img
            src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png"
            width="15"
          />
          <img
            src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png"
            width="15"
          />
          <img
            src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png"
            width="15"
          />
          <img
            src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png"
            width="15"
          />
          <span className="text-xs ml-2 text-gray-500">20k reviws</span>
        </span>
        <div className="mt-5 flex gap-2">
          <button className="bg-yellow-500/80 hover:bg-yellow-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wide transition">
            Add to Cart
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <img
              className="opacity-50"
              src="https://icons-for-free.com/download-icon-love+icon-1320186917460069295_512.png"
              width="20"
              alt=""
            />
          </button>
          <button className="flex-grow flex justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
            <img
              className="opacity-50"
              src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/eye-24-512.png"
              width="20"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
