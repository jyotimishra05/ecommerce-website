// import { Action } from "@remix-run/router";

const cart=[];
const HandleCart=(state=cart,action)=>{
    const product=action.payload;
    switch(action.type){
        case "ADDITEM":
            //check if the item is alresdy exist
            const exist=state.find((x)=>x.id===product.id)
            if(exist){
                return state.map((x)=>
                 x.id===product.id ? {...x , quantity:x.quantity+1}:x
                )
            }
            else{
                const product=action.payload;
                return[
                    ...state,
                    {...product,
                    quantity:1,
                    }
                ]
                

            }
            // eslint-disable-next-line
            break;
            case "DELETEITEM":
                

            const exist1=state.find((x)=>x.id===product.id)
            if(exist1.quantity===1){
                return state.filter((x)=>x.id!==exist1.id)
                
            }
            else{
                return state.map((x)=>
                x.id===product.id ? {...x , quantity:x.quantity-1}:x
               )
            }
            // eslint-disable-next-line
            break;
            default:
                return state;
                // eslint-disable-next-line
                break;
    };

}
export default HandleCart;