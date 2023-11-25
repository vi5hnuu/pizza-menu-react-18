import { Pizza as PizzaModel } from "../model/pizza-model";

export function Pizza({ pizza }: { pizza: PizzaModel }) {
  return (
    <div className="flex gap-4 p-2 transition-all rounded-lg overflow-hidden hover:scale-[1.05] font-mono shadow-sm">
      <img
        className="flex w-32 aspect-square object-contain"
        src={require(`/src/assets/${pizza.imagePath}`)}
        alt={pizza.name}
      ></img>
      <div className="flex flex-col gap-3">
        <div className="flex flex-1 flex-col">
          <span className="inline-flex text-lg">{pizza.name}</span>
          <p className="text-gray-400 text-sm line-clamp-3">{pizza.ingredients}</p>
        </div>
        <p className="inline-flex">{pizza.price}</p>
      </div>
    </div>
  );
}
