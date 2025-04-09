import { DeliveryContainer, ImagemContainer } from "./styles";

import orderinfor from "../../assets/orderinfor.svg"
import Illustration from "../../assets/Illustration.svg"


export function Delivery(){

    return(
        <DeliveryContainer>
          <span>            
              <h1>Uhu! Pedido confirmado</h1>
              <p>
              Agora é só aguardar que logo o café chegará até você
        
              </p>
          </span>
               <ImagemContainer><img src={orderinfor}/>
               <img src={Illustration}/>
               
               </ImagemContainer>

               


        </DeliveryContainer>
      
    )
}