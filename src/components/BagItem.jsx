import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useStateContext } from "../lib/ContextApi";
import formatCurrency from "../utils/formatCurrency";

export default function BagItem({id, data}) {
  const {
    removeFromBag,
    increaseBagQuantity,
    decreaseBagQuantity,
    getItemQuantity,
  } = useStateContext();

  const item = data?.find((product) => product.id === id);


  if (item == null) return null;
  const quantityCount = getItemQuantity(item?.id);

  return (
    <div className="mt-2">
      <h6 className="text-start text-sm font-bold">{item.title}</h6>
      <div className="d-md-flex gap-4 mt-5">
        <div className="mb-4 md-mb-0" style={{ height: "270px" }}>
          <img
            src={item.images[0]}
            alt={item.title}
            className="w-100 h-100"
          />
        </div>
        <div className="d-flex flex-md-column justify-content-between">
          <div className="d-flex gap-3 align-items-center">
            <AiOutlineMinus 
                onClick={() => decreaseBagQuantity(item.id)}
                style={{ cursor: 'pointer'}} 
                />
            <span>{quantityCount}</span>
            <AiOutlinePlus 
                onClick={() => increaseBagQuantity(item.id)} 
                style={{ cursor: 'pointer'}} 
                />
          </div>
          <p className="text-sm text-center">{formatCurrency(item.price)}</p>
          <p
            className="text-sm text-center"
            onClick={() => removeFromBag(item.id)}
            style={{ cursor: 'pointer'}} 
          >
            DELETE
          </p>
        </div>
      </div>
    </div>
  );
}
