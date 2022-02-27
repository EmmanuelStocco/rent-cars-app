import React from 'react';
                          
import GasolineSvg from '../../assets/gasoline.svg'
import { StyleSheet, Text, View } from 'react-native';

import { CarDTO } from '../../dtos/CarDTO';
                          
import {
    Container,
    Details,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    Type,
    CarImage,

    
} from './styles';
import { RectButtonProps } from 'react-native-gesture-handler';
  interface Props extends RectButtonProps {
    data: CarDTO;
}
                          
export function Car({ data, ...rest } :Props){
                          
   return (
     
           <Container {...rest}>
               <Details>
                   <Brand> {data.brand} </Brand>
                   <Name>{data.name}</Name>
    
                <About>
                    <Rent>
                        <Period>{data.rent.period} </Period>
                        <Price>{`R$ ${data.rent.price}`} </Price>
                    </Rent>

                    <Type>
                        <GasolineSvg />
                    </Type>
                </About>
               </Details>

               <CarImage 
                    source={{ uri: data.thumbnail}}
                    resizeMode="contain" //autoajuste para imagens acima    
             />
           </Container>
  
      ); 
    }