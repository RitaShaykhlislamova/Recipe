import styled from "styled-components";

export const HereSection = styled.div`

     padding: 8rem 0 ;
     
     display: flex;
     justify-content: space-between;
     align-items: center;
     
     > div {
        flex: 1;
     }
     
     h2 {
         font-family: 'Poppins';
         font-style: normal;
         font-weight: 700;
         font-size: 32px;
         line-height: 48px;
         color: #000000;
         gap: 24px;
     }
     p {
     font-family: 'Poppins';
     font-style: normal;
     font-weight: 400;
     font-size: 24px;
     line-height: 36px;
     color: rgba(0, 0, 0, 0.5);
     }
     
     img {
         /*height: 378.92px;
         width: 693.86px;*/
     }
`

export const TopSection = styled.section`
   color: ${({theme}) => theme.color.pink};
   background-color: ${({theme}) => theme.color.black};
`