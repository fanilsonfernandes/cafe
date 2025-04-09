import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import Location from '../../assets/Location.svg'
import Cart from '../../assets/Cart.svg'



export function Header(){

    return (
        <div>    
<HeaderContainer>
    <img src={Logo}/>
        
        <nav>
        <img src={Location}/>
         
       
        

        <img src={Cart}/>
         
     
        
        </nav>
         </HeaderContainer>
         
        

         
        

         </div>
    )
        
    
}