
import {AiFillDelete} from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const {cart} = useSelector((state)=> state);
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>
<div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img className="object-cover " src={item.image} />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-lg text-slate-700 font-semibold">{item.title}</h1>
          <h1 className="text-base text-slate-700 text-sm">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${item.price}</p>
            <div className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
            onClick={removeFromCart}>
              <AiFillDelete/>
            </div>
          </div>

        </div>

       
      </div>
      

    </div>
    {
      itemIndex != cart.length-1 && <hr class="border-gray-500 border-2 w-3/4  mx-auto"></hr>
    }
    
    
    </div>
    
  );
};

export default CartItem;