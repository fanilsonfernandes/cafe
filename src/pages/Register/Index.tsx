import { 
    BoxConfirmaContainer,
    
    Boxinputbutton,
    
    CoferemoveOneContainer,
    
    CoferemoveTwoContainer,
    
    ConfirmaoContainer,
    EndereContainer, 
    FirstboxContainer,
     IconButtonInputContainer,
     
     ItemsTotal,
     
     ManeyButtonContainer,
     ManeyContainer,
     ManeyTotalContainer,
     ManeyboxContainer,
     RgisterContainer, 
     TabloContainer,
     ThreeboxfirstContainer,
     TotalContainer,
     TotalContainersecond,
     TotaloneContainer,
     TwoboxContainer,
     TwoboxfirstContainer
     } from "./styles";

import Icon9 from '../../assets/Icon9.svg'
import Icon5 from '../../assets/Icon5.svg'
import Icon6 from '../../assets/Icon6.svg'
import Icon8 from '../../assets/Icon8.svg'
import Icon7 from '../../assets/Icon7.svg'
import one from '../../assets/one.svg'
import Icon10 from '../../assets/Icon10.svg'
import Icon11 from '../../assets/Icon11.svg'
export function Register(){
    return(
    <RgisterContainer>
         
         
         
         <EndereContainer >
         <h3 className="endereco">Completa o seu pedido</h3> 
            <TabloContainer>
           
            <span className="icontxt">
            <img src={Icon9}/>
                <h3>Endereço de Entrega

                </h3>
                </span>
            <p>
            Informe o endereço onde deseja receber seu pedido

            </p>
               <FirstboxContainer>
            <input className="firstbox" type="number"></input>

            <input className="twobox"></input>
            </FirstboxContainer>

            <TwoboxContainer>
                <TwoboxfirstContainer>
                <input className="secondfierstbox" ></input>
                <input className="secondtwobox" ></input>
                </TwoboxfirstContainer>
                <ThreeboxfirstContainer>
                <input className="threefirstbox" ></input>
                <input className="threetwotbox" ></input>
                <input className="threethreetbox" ></input>
                </ThreeboxfirstContainer>
            </TwoboxContainer>

            </TabloContainer>


            <ManeyContainer> 
                <ManeyboxContainer>
                <span className="iconmaney">
            <img src={Icon5}/>
                <span>Pagamento

                </span>
                </span>
            <p>
            O pagamento e feito na entrega.
            Escolhe a forma em que deseja pagar
                </p>

            <ManeyButtonContainer>
                <button className="credito">
                   
                   <img  className="photo"  src={Icon6}/>
                    <span>Cartão de crédito</span>
                
                </button>
                <button className="debito">
                    <img src={Icon7}/>
                    <span>cartão de débito</span>
                </button>
                <button className="dinheiro">
                    <img src={Icon8}/>
                   <span>dinheiro</span> 
                </button>
              
            </ManeyButtonContainer>
            </ManeyboxContainer>
           </ManeyContainer>
            </EndereContainer>


         <ConfirmaoContainer>
         <h3>Cafés selecionados</h3>
            <BoxConfirmaContainer>
                <CoferemoveOneContainer>
                    <IconButtonInputContainer>
                    <img src={one}/>
                       <div>
                      <p>Expresso Tradicional</p>
                        <div className="boxinputbutton">
                         <input type="number"></input>
                <button>
                <p>Remover</p>
                    <img  className="icon" src={Icon10}/>
                   
                </button>
                 </div>
                 </div>
                 
            </IconButtonInputContainer>
                
                 
               <span>R$ <h3>9,90</h3></span> 
                </CoferemoveOneContainer>



                <CoferemoveTwoContainer>
                
                <img className="iconone" src={Icon11}/>

                    
                 <div>
                 <p>Latte</p>
                 <Boxinputbutton>
                <input type="number"></input>
                <button>
                <p>Remover</p>
                    <img  className="icon" src={Icon10}/>
                  
                </button>
                
                </Boxinputbutton>
                </div>
                

                
                
                <span>R$ <h3>9,90</h3></span> 

                </CoferemoveTwoContainer>


                <TotalContainer>
                    <TotaloneContainer>
                        <TotalContainersecond>
                          
                        <ItemsTotal>
                    <p>Total de itens</p>
                    <p>Entrega </p>          
                    <h3><p>Total  </p></h3>
                    </ItemsTotal> 
                    <ManeyTotalContainer>
                    <p>R$ 3,50</p>
                    <p>R$ 29,70</p> 
                   <h3><p>R$ 33,20</p></h3> 
                    </ManeyTotalContainer>  

                        </TotalContainersecond>
                   
                     
                          
                                    
                    </TotaloneContainer>
                
                <button>
                    <p className="confirma">

                    confirmar pedido
                    </p>


                </button>
                </TotalContainer>

            </BoxConfirmaContainer>
        
        </ConfirmaoContainer>

            
           
          
        </RgisterContainer>
        
    )
}