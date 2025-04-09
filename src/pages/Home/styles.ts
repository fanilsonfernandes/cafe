
import styled from "styled-components";

export const HomeContainer=styled.div`

.intro{
    width: 1440;
    height: 544;
    background: ${(props)=>props.theme[' Background']}
}
h1{
    font-size: 2.126rem;
    font-family: Regular,sans-serif;
    color: ${(props)=>props.theme['Title']} ;
}

display: flex;
flex-direction: column;
margin: 3rem auto;

.box{
    display: flex;
 justify-content: space-between;

}
.boxparagrafo{
    display: flex;
    flex-direction: column;
}
.paragrafo{
padding-top: 2rem;
font-size: 1.2rem;
font-family: Regular,sans-serif;
color:${(props)=>props.theme['Title']} ;
}
img {
    width: 476;
    height: 360;
    
}


`;
export const IconContainer=styled.div`
 display: flex;
 gap: 2.5rem;
width: 567;
height: 84;
align-items: center;



.firstbox{

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color:${(props)=>props.theme['Title']} 

}

.Compras{
font-size: 1.2rem;
font-family: Regular,sans-serif;
}

.secondbox{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding-top: 2rem;
    color:${(props)=>props.theme['Title']} 


}

.Entrega{
    font-size: 1.2rem;
font-family: Regular,sans-serif;
text-align: center;

}


.threebox{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color:${(props)=>props.theme['Title']} 

}

.embalagem{
font-size: 1.2rem;
font-family: Regular,sans-serif;
}


.forbox{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding-top: 2rem;
    color:${(props)=>props.theme['Title']} 


}

.fresquinho{
font-size: 1.2rem;
font-family: Regular,sans-serif;
}

`;
export const ListCofeContainer=styled.div`
display: flex;
flex-direction: column;
width: 1440;
height: 1645;
margin-top: 3.5rem;

.nossos{
    padding-top: 2.5rem;
    font-family: Regular,sans-serif;
    color:${(props)=>props.theme['Title']};
}
.mycofes{
    margin-top: 2.5rem;
    
}
.cofeboxone{
    display: flex;
    flex-direction: row;
     align-items:center;
    justify-content: space-between;
    gap: 2.5rem;

}
.cofeone{
    width:256px;
    height: 310px;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background:${(props)=>props.theme['Card']}  ;
    border-radius: 6px 36px 6px 36px;
    
    }

    .cofeimgoone{
        justify-items:center;
        margin-left: 1.5rem;
        margin-top: -1rem;
    }

    .cofebutton{
        margin-top: 0.5rem;
        margin-left: 3rem;
        justify-content: center;
        align-items: center;
        border:none;

    }

    .cofeparafoone{
        font-size: 1.1rem;
        font-family: Regular,sans-serif;
        color:${(props)=>props.theme['YellowDark']}  ;
    }

    .expresso{
        font-size: 1.1rem;
        font-family: Regular,sans-serif;
        text-align: center;
        justify-content:center;
        padding-top: 0.5rem;
      color: ${(props)=>props.theme['Title']} ;
    }

    .feito{
     padding-top: 2rem;
        font-family: Regular,sans-serif;
        align-items: center;
    
        justify-content: center;
      color: ${(props)=>props.theme['Title']} ;

    }

    .feito p {
        justify-content: center;
        text-align: center;

    } 

    .cofecarre{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 2rem;
        
        justify-content: space-between;
        margin-top: 2.5rem;
    }
    .rs{
        gap: 0.5rem;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: row;
        font-family: Regular,sans-serif;
        color: ${(props)=>props.theme['Title']} ;
    }
     .nove{
        font-size: 1rem;
        font-family: Regular,sans-serif;
        color: ${(props)=>props.theme['Title']} ;

     }
     .cofeinput{
        
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-right: 2rem;
     }

    .dentro{
        border: none;
        width: 3.5rem;
        height: 1.5rem;
    }

    .onecarreby{
        border: none;
        border-radius: 0;
    }

    /* second cofe */







`;