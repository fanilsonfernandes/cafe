
import Imagem from '../../assets/Imagem.svg'
import Icon1 from '../../assets/Icon1.svg'
import Icon2 from '../../assets/Icon2.svg'
import Icon3 from '../../assets/Icon3.svg'
import Icon4 from '../../assets/Icon4.svg'

import one from '../../assets/one.svg'
import Two from '../../assets/Two.svg'
import Three from '../../assets/Three.svg'
import For from '../../assets/For.svg'
import IconButton from '../../assets/IconButton.svg'
import { HomeContainer, IconContainer, ListCofeContainer } from './styles'

export function Home(){

    return(
        <HomeContainer>
            <div className="intro">
                <div className="box">
                <div className="boxparagrafo">  
        <h1>Encontre o café perfeito 
      <p>para qualquer hora do dia
              </p> </h1>
        <span 
        className="paragrafo">
        Com o Coffee Delivery você recebe seu café onde estiver, a 
        
         <p>
        qualquer hora
        </p>
         </span>
              
              </div>
      
              <img src={Imagem}/>
              </div>
              


              <IconContainer>
                <div className="boxone" >
                  <div className="firstbox">
                  <img src={Icon1} />
                 <span className="Compras">Compra simples e segura</span>
                  </div>
                  <div className="secondbox">
                  <img src={Icon2}/>
                 <span className="Entrega">Entrega rápida e rastreada</span>
                  </div>
                 </div>


                
                <div className="boxtwo">
                <div className="threebox">
                <img src={Icon3}/>
                 <span className="embalagem">Embalagem mantém o café intacto</span>
                </div>
                
                 <div className="forbox">
                  <img src={Icon4}/>
                 <span className="fresquinho">O café chega fresquinho até você</span>
                 </div>
                 </div>


              </IconContainer>
              </div>

              <ListCofeContainer>
                <h2><span className="nossos">Nossos cafés</span></h2>
                <div className="mycofes">
                   <div className="cofeboxone">
                    <div className="cofeone">
                       <img className="cofeimgoone"  src={one}/> 
                       <button className="cofebutton">
                        <p className="cofeparafoone">Tradicional</p>
                       </button>
                       <h3><p className="expresso">Expresso Tradicional</p></h3>
                       <span className="feito">O tradicional café feito com água
                         <p>quente e grãos moídos</p>
                       </span>
                       <span className="cofecarre">
                      <p className="rs">R$ <span className="nove"><h3>
                      9,90</h3>
                      </span>
                      </p>
                      <nav className="cofeinput">
                      <input  className="dentro" type="number"></input>
                       <button>
                        <img  className="onecarreby" src={IconButton}/>
                       </button>
                       </nav> 
                       
                       </span>
                    </div>

                    {/* secondcofe */}

                
                    <div className="cofeone">
                       <img className="cofeimgoone"  src={Two}/> 
                       <button className="cofebutton">
                        <p className="cofeparafoone">Tradicional</p>
                       </button>
                       <h3><p className="expresso">Expresso Tradicional</p></h3>
                       <span className="feito">O tradicional café feito com água
                         <p>quente e grãos moídos</p>
                       </span>
                       <span className="cofecarre">
                      <p className="rs">R$ <span className="nove"><h3>
                      9,90</h3>
                      </span>
                      </p>
                      <nav className="cofeinput">
                      <input  className="dentro" type="number"></input>
                       <button>
                        <img  className="onecarreby" src={IconButton}/>
                       </button>
                       </nav> 
                       
                       </span>
                    </div>
                    
                       
                    {/* threecfe */}


                    <div className="cofeone">
                       <img className="cofeimgoone"  src={Three}/> 
                       <button className="cofebutton">
                        <p className="cofeparafoone">Tradicional</p>
                       </button>
                       <h3><p className="expresso">Expresso Tradicional</p></h3>
                       <span className="feito">O tradicional café feito com água
                         <p>quente e grãos moídos</p>
                       </span>
                       <span className="cofecarre">
                      <p className="rs">R$ <span className="nove"><h3>
                      9,90</h3>
                      </span>
                      </p>
                      <nav className="cofeinput">
                      <input  className="dentro" type="number"></input>
                       <button>
                        <img  className="onecarreby" src={IconButton}/>
                       </button>
                       </nav> 
                       
                       </span>
                    </div>
                    
                       
                   {/* forcofe */}

                    
                    
                       <div className="cofeone">
                       <img className="cofeimgoone"  src={For}/> 
                       <button className="cofebutton">
                       <button>gelado</button>
                        <p className="cofeparafoone">Tradicional</p>
                       </button>
                       <h3><p className="expresso">Expresso Tradicional</p></h3>
                       <span className="feito">O tradicional café feito com água
                         <p>quente e grãos moídos</p>
                       </span>
                       <span className="cofecarre">
                      <p className="rs">R$ <span className="nove"><h3>
                      9,90</h3>
                      </span>
                      </p>
                      <nav className="cofeinput">
                      <input  className="dentro" type="number"></input>
                       <button>
                        <img  className="onecarreby" src={IconButton}/>
                       </button>
                       </nav> 
                       
                       </span>
                    </div>
                    </div>


                    {/* boxcofe2 */}

                    <div className="cofeboxone">
                    <div className="cofeone">
                       <img className="cofeimgoone"  src={one}/> 
                       <button className="cofebutton">
                        <p className="cofeparafoone">Tradicional</p>
                       </button>
                       <h3><p className="expresso">Expresso Tradicional</p></h3>
                       <span className="feito">O tradicional café feito com água
                         <p>quente e grãos moídos</p>
                       </span>
                       <span className="cofecarre">
                      <p className="rs">R$ <span className="nove"><h3>
                      9,90</h3>
                      </span>
                      </p>
                      <nav className="cofeinput">
                      <input  className="dentro" type="number"></input>
                       <button>
                        <img  className="onecarreby" src={IconButton}/>
                       </button>
                       </nav> 
                       
                       </span>
                    </div>

                    {/* secondcofe */}

                
                    <div className="cofeone">
                       <img className="cofeimgoone"  src={Two}/> 
                       <button className="cofebutton">
                        <p className="cofeparafoone">Tradicional</p>
                       </button>
                       <h3><p className="expresso">Expresso Tradicional</p></h3>
                       <span className="feito">O tradicional café feito com água
                         <p>quente e grãos moídos</p>
                       </span>
                       <span className="cofecarre">
                      <p className="rs">R$ <span className="nove"><h3>
                      9,90</h3>
                      </span>
                      </p>
                      <nav className="cofeinput">
                      <input  className="dentro" type="number"></input>
                       <button>
                        <img  className="onecarreby" src={IconButton}/>
                       </button>
                       </nav> 
                       
                       </span>
                    </div>
                    
                       
                    {/* threecfe */}


                    <div className="cofeone">
                       <img className="cofeimgoone"  src={Three}/> 
                       <button className="cofebutton">
                        <p className="cofeparafoone">Tradicional</p>
                       </button>
                       <h3><p className="expresso">Expresso Tradicional</p></h3>
                       <span className="feito">O tradicional café feito com água
                         <p>quente e grãos moídos</p>
                       </span>
                       <span className="cofecarre">
                      <p className="rs">R$ <span className="nove"><h3>
                      9,90</h3>
                      </span>
                      </p>
                      <nav className="cofeinput">
                      <input  className="dentro" type="number"></input>
                       <button>
                        <img  className="onecarreby" src={IconButton}/>
                       </button>
                       </nav> 
                       
                       </span>
                    </div>
                    
                       
                   {/* forcofe */}

                    
                    
                       <div className="cofeone">
                       <img className="cofeimgoone"  src={For}/> 
                       <button className="cofebutton">
                       <button>gelado</button>
                        <p className="cofeparafoone">Tradicional</p>
                       </button>
                       <h3><p className="expresso">Expresso Tradicional</p></h3>
                       <span className="feito">O tradicional café feito com água
                         <p>quente e grãos moídos</p>
                       </span>
                       <span className="cofecarre">
                      <p className="rs">R$ <span className="nove"><h3>
                      9,90</h3>
                      </span>
                      </p>
                      <nav className="cofeinput">
                      <input  className="dentro" type="number"></input>
                       <button>
                        <img  className="onecarreby" src={IconButton}/>
                       </button>
                       </nav> 
                       
                       </span>
                    </div>
                    </div>

                </div>

                <div className="cofeboxone">
                    <div className="cofeone">
                       <img className="cofeimgoone"  src={one}/> 
                       <button className="cofebutton">
                        <p className="cofeparafoone">Tradicional</p>
                       </button>
                       <h3><p className="expresso">Expresso Tradicional</p></h3>
                       <span className="feito">O tradicional café feito com água
                         <p>quente e grãos moídos</p>
                       </span>
                       <span className="cofecarre">
                      <p className="rs">R$ <span className="nove"><h3>
                      9,90</h3>
                      </span>
                      </p>
                      <nav className="cofeinput">
                      <input  className="dentro" type="number"></input>
                       <button>
                        <img  className="onecarreby" src={IconButton}/>
                       </button>
                       </nav> 
                       
                       </span>
                    </div>

                    {/* secondcofe */}

                
                    <div className="cofeone">
                       <img className="cofeimgoone"  src={Two}/> 
                       <button className="cofebutton">
                        <p className="cofeparafoone">Tradicional</p>
                       </button>
                       <h3><p className="expresso">Expresso Tradicional</p></h3>
                       <span className="feito">O tradicional café feito com água
                         <p>quente e grãos moídos</p>
                       </span>
                       <span className="cofecarre">
                      <p className="rs">R$ <span className="nove"><h3>
                      9,90</h3>
                      </span>
                      </p>
                      <nav className="cofeinput">
                      <input  className="dentro" type="number"></input>
                       <button>
                        <img  className="onecarreby" src={IconButton}/>
                       </button>
                       </nav> 
                       
                       </span>
                    </div>
                    
                       
                    {/* threecfe */}


                    <div className="cofeone">
                       <img className="cofeimgoone"  src={Three}/> 
                       <button className="cofebutton">
                        <p className="cofeparafoone">Tradicional</p>
                       </button>
                       <h3><p className="expresso">Expresso Tradicional</p></h3>
                       <span className="feito">O tradicional café feito com água
                         <p>quente e grãos moídos</p>
                       </span>
                       <span className="cofecarre">
                      <p className="rs">R$ <span className="nove"><h3>
                      9,90</h3>
                      </span>
                      </p>
                      <nav className="cofeinput">
                      <input  className="dentro" type="number"></input>
                       <button>
                        <img  className="onecarreby" src={IconButton}/>
                       </button>
                       </nav> 
                       
                       </span>
                    </div>
                    
                       
                   {/* forcofe */}

                    
                    
                       <div className="cofeone">
                       <img className="cofeimgoone"  src={For}/> 
                       <button className="cofebutton">
                       <button>gelado</button>
                        <p className="cofeparafoone">Tradicional</p>
                       </button>
                       <h3><p className="expresso">Expresso Tradicional</p></h3>
                       <span className="feito">O tradicional café feito com água
                         <p>quente e grãos moídos</p>
                       </span>
                       <span className="cofecarre">
                      <p className="rs">R$ <span className="nove"><h3>
                      9,90</h3>
                      </span>
                      </p>
                      <nav className="cofeinput">
                      <input  className="dentro" type="number"></input>
                       <button>
                        <img  className="onecarreby" src={IconButton}/>
                       </button>
                       </nav> 
                       
                       </span>
                    </div>
                    </div>

                    {/* 4 */}

                    <div className="cofeboxone">
                    <div className="cofeone">
                       <img className="cofeimgoone"  src={one}/> 
                       <button className="cofebutton">
                        <p className="cofeparafoone">Tradicional</p>
                       </button>
                       <h3><p className="expresso">Expresso Tradicional</p></h3>
                       <span className="feito">O tradicional café feito com água
                         <p>quente e grãos moídos</p>
                       </span>
                       <span className="cofecarre">
                      <p className="rs">R$ <span className="nove"><h3>
                      9,90</h3>
                      </span>
                      </p>
                      <nav className="cofeinput">
                      <input  className="dentro" type="number"></input>
                       <button>
                        <img  className="onecarreby" src={IconButton}/>
                       </button>
                       </nav> 
                       
                       </span>
                    </div>

                    {/* secondcofe */}

                
                    <div className="cofeone">
                       <img className="cofeimgoone"  src={Two}/> 
                       <button className="cofebutton">
                        <p className="cofeparafoone">Tradicional</p>
                       </button>
                       <h3><p className="expresso">Expresso Tradicional</p></h3>
                       <span className="feito">O tradicional café feito com água
                         <p>quente e grãos moídos</p>
                       </span>
                       <span className="cofecarre">
                      <p className="rs">R$ <span className="nove"><h3>
                      9,90</h3>
                      </span>
                      </p>
                      <nav className="cofeinput">
                      <input  className="dentro" type="number"></input>
                       <button>
                        <img  className="onecarreby" src={IconButton}/>
                       </button>
                       </nav> 
                       
                       </span>
                    </div>
                    
                       
                    {/* threecfe */}


                    <div className="cofeone">
                       <img className="cofeimgoone"  src={Three}/> 
                       <button className="cofebutton">
                        <p className="cofeparafoone">Tradicional</p>
                       </button>
                       <h3><p className="expresso">Expresso Tradicional</p></h3>
                       <span className="feito">O tradicional café feito com água
                         <p>quente e grãos moídos</p>
                       </span>
                       <span className="cofecarre">
                      <p className="rs">R$ <span className="nove"><h3>
                      9,90</h3>
                      </span>
                      </p>
                      <nav className="cofeinput">
                      <input  className="dentro" type="number"></input>
                       <button>
                        <img  className="onecarreby" src={IconButton}/>
                       </button>
                       </nav> 
                       
                       </span>
                    </div>
                    
                       
                   {/* forcofe */}

                    
                    
                       <div className="cofeone">
                       <img className="cofeimgoone"  src={For}/> 
                       <button className="cofebutton">
                       <button>gelado</button>
                        <p className="cofeparafoone">Tradicional</p>
                       </button>
                       <h3><p className="expresso">Expresso Tradicional</p></h3>
                       <span className="feito">O tradicional café feito com água
                         <p>quente e grãos moídos</p>
                       </span>
                       <span className="cofecarre">
                      <p className="rs">R$ <span className="nove"><h3>
                      9,90</h3>
                      </span>
                      </p>
                      <nav className="cofeinput">
                      <input  className="dentro" type="number"></input>
                       <button>
                        <img  className="onecarreby" src={IconButton}/>
                       </button>
                       </nav> 
                       
                       </span>
                    </div>
                    </div>
                
                      
                      
                       
                      
                      
               
                      
                     
                      
               
                    
                    
                
                
              </ListCofeContainer>
              
         
                    
                    
                
  </HomeContainer>
      
    )
}