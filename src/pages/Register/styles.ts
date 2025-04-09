import styled from "styled-components";


export const RgisterContainer=styled.div`
display: flex;
gap: 2rem;
width: 1210px;
height: 1005px;

margin-top: 3.5rem;
 display: flex;
 .endereco{
    margin-top: 2rem;
    font-size: 1.1rem;
    font-family: Regular,sans-serif;
    color: ${(props)=>props.theme['Title']} ;
 }

`;

export const EndereContainer=styled.div`

 width: 640px;
 height:400px;
`;

export const TabloContainer=styled.div`
width: 640px;
height: 400px;
margin-top: 2rem;
border-radius: 6px 6px 6px 6px;

background: ${(props)=>props.theme['Button']} ;

.icontxt{

    display: flex;
   padding-top: 2rem;
   padding-left: 2.5rem;
   gap: 0.5rem;
   
}

p{
   padding-top: 0.5rem;
   padding-left: 4.5rem;
   font-size: 1rem;
    font-family: Regular,sans-serif;
    color: ${(props)=>props.theme['Title']}
   
}








`;

export const FirstboxContainer=styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 2rem;
 margin-left: 2.5rem;
 gap: 2rem;

 .firstbox{
width: 200px;
height: 42px;
border-radius: 4px;
border: none;
background: ${(props)=>props.theme['Input']};


}

.twobox{
width: 560px;
height: 42px;
border-radius: 4px;
border: none;
background: ${(props)=>props.theme['Input']};


}

`;

export const TwoboxContainer=styled.div`

display: flex;
 flex-direction: column;
 margin-top: 0.5rem;
 gap: 0.5rem;



`;
export const TwoboxfirstContainer=styled.div`

display: flex;
 flex-direction: row;
 margin-top: 0.5rem;
 margin-left: 2.5rem;
 gap: 0.5rem;

 .secondfierstbox{

width: 200px;
height: 42px;
border-radius: 4px;
border: none;
background: ${(props)=>props.theme['Input']};


 }

 .secondtwobox{
   width: 350px;
height: 42px;
border-radius: 4px;
border: none;
background: ${(props)=>props.theme['Input']};


 }

`;

export const ThreeboxfirstContainer=styled.div`

display: flex;
 flex-direction: row;
 margin-top: 0.5rem;
 margin-left: 2.5rem;
 gap: 0.5rem;

 .threefirstbox{
   width: 200px;
height: 42px;
border-radius: 4px;
border: none;
background: ${(props)=>props.theme['Input']};

 }


 .threetwotbox{
   width: 290px;
height: 42px;
border-radius: 4px;
border: none;
background: ${(props)=>props.theme['Input']};

 }

 .threethreetbox{

   width: 50px;
height: 42px;
border-radius: 4px;
border: none;
background: ${(props)=>props.theme['Input']};


 }

`;

export const ManeyContainer=styled.div`

width: 640px;
 height:200px;

`;

export const ManeyboxContainer=styled.div`

width: 640px;
 height:200px;
 margin-top: 2rem;
border-radius: 6px 6px 6px 6px;

background: ${(props)=>props.theme['Button']} ;

.iconmaney{
   display: flex;
   padding-top: 2rem;
   padding-left: 2.5rem;
   gap: 0.5rem;
}

p{
   padding-top: 0.5rem;
   padding-left: 4rem;
   font-size: 1rem;
    font-family: Regular,sans-serif;
    color: ${(props)=>props.theme['Title']}
   
}



`;

export const ManeyButtonContainer=styled.div`

display: flex;
flex-direction: row;
gap: 0.5rem;
margin-top: 2.5rem;
margin-left: 2.5rem;

.credito{
   display: flex;

   justify-content: center;
   align-items: center;
   width:178.67px;
   height: 51px;
   gap: 0.5rem;
   border-radius: 6px  ;
   border: none;
   
}
.debito{

   display: flex;

   justify-content: center;
   align-items: center;
   width:178.67px;
   height: 51px;
   gap: 0.5rem;
   border-radius: 6px  ;
   border: none;

}

.dinheiro{
   display: flex;

justify-content: center;
align-items: center;
width:178.67px;
height: 51px;
gap: 0.5rem;
border-radius: 6px  ;
border: none;
}

`;

export const ConfirmaoContainer=styled.div`
width: 448px;
height: 498px;
margin-top: 2rem;


h3{
  
    font-size: 1.1rem;
    font-family: Regular,sans-serif;
    color: ${(props)=>props.theme['Title']} ;

}



`;

export const BoxConfirmaContainer=styled.div`
width: 448px;
height: 498px;
margin-top: 2rem;
border-radius: 6px 44px 6px 44px;
flex-direction: column;
background: ${(props)=>props.theme['Button']} ;


`;
export  const CoferemoveOneContainer=styled.div`
  display: flex;
   justify-content: space-between; 
  padding-top: 2.5rem;
  /* border-bottom:0.1rem solid  ${(props)=>props.theme['Title']}  ; */
  
 



  span{
   display: flex;
   padding-right: 2rem;
   gap: 0.5rem;
   font-family: Regular,sans-serif;
    color: ${(props)=>props.theme['Title']} ;
  }

`;
export const IconButtonInputContainer=styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  .boxinputbutton{
   margin-top: 0.5rem;
   display: flex;
   gap: 1rem;
  }

  
  

  img{
   width: 64px;
   height: 64px;
    margin-left: 0.5rem; 
  } 

  p{
   padding-left: 0.5rem;
   font-size: 12.5px;
font-family: Regular,sans-serif;
    color: ${(props)=>props.theme['Title']} ;

  }


  input{
   width: 72px;
   height: 32px;
   border-radius: 6px;

  }

  button{
   width: 92px;
   height: 32px;
   border-radius: 6px;
   
   display: flex;
   text-align: center;
   align-items: center;

  }

  .icon{
   width: 16px;
   height: 16px;
  }

  

`;

export const CoferemoveTwoContainer=styled.div`

 display: flex;
   justify-content: space-between; 
  margin-top: 4.5rem;
  /* border-bottom:0.1rem solid  ${(props)=>props.theme['Title']}  ; */

  img{
   width: 64px;
   height: 64px;
    margin-left: 0.5rem; 
  } 

  p{
   padding-left: 0.5rem;
   font-size: 12.5px;
font-family: Regular,sans-serif;
    color: ${(props)=>props.theme['Title']} ;

  }

span{
    display: flex;
   padding-right: 2rem;
   gap: 0.5rem;
   font-family: Regular,sans-serif;
    color: ${(props)=>props.theme['Title']} ; 
  }
`;

export const Boxinputbutton =styled.div`

margin-top: 0.5rem;
   display: flex;
   gap: 1rem;

  
   input{
   width: 72px;
   height: 32px;
   border-radius: 6px;

  }

  button{
   width: 92px;
   height: 32px;
   border-radius: 6px;
   
   display: flex;
   text-align: center;
   align-items: center;

  }

  .icon{
   width: 16px;
   height: 16px;
  }


  `;


export const TotalContainer=styled.div`
display: flex;
flex-direction: column;
margin-top: 2.5rem;


button{
   margin-left: 2.5rem;
   
   margin-top: 1.5rem;
   width:368px;
   height:46px ;
   border-radius: 6px ;

   background: ${(props)=>props.theme['Yellow']} ;
}

.confirma{
   font-size: 16.5px;
font-family: Regular,sans-serif;
   color: ${(props)=>props.theme['White']} ;
}

`;
export const TotaloneContainer=styled.div`
width: 368px;
height: 92px;
display: flex;
flex-direction: row;
margin-left: 1rem;



`;
export const TotalContainersecond=styled.div`
width: 368px;
height: 92px;
display: flex;
margin-left: 1.5rem;
justify-content: space-between;


`;

export const ItemsTotal=styled.div`

flex-direction: column;
p{
   font-size: 16.5px;
font-family: Regular,sans-serif;
gap: 2rem;
    color: ${(props)=>props.theme['Title']} ;


}


`;

export const ManeyTotalContainer=styled.div`
flex-direction: column;
margin-left: 7rem;
`;