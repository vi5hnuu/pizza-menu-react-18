import { Pizza } from "./Pizza";
import { Pizza as PizzaModel } from "./../model/pizza-model";

export function Menu(props: { pizzas: PizzaModel[] }) {
  return (
    <div className="flex flex-col mt-16">
      <p className="uppercase mx-auto border-y-2 border-y-charcol-black text-2xl font-bold">our menu</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8">
        {props.pizzas.map((pizza: PizzaModel) => (
          <Pizza pizza={pizza} />
        ))}
      </div>
    </div>
  );
}
