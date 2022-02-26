import React from 'react';
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import Logo from '../../assets/logo.svg'

import { Car } from '../../components/Car';
                          
import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList
} from './styles';
                          
export function Home(){         
    const carData = {
        brand: 'Audi',
        name: 'RS 5 Coupe',
        rent: {
            period: 'Ao-dia',
            price: 120
        },
        thumbnail: 'https://www.pngplay.com/wp-content/uploads/13/Audi-RS5-PNG-Free-File-Download.png'
    }
 
    
    
   return ( 
           <Container>
               <StatusBar
                    barStyle='light-content'
                    backgroundColor='transparent'
                    translucent 
                    
               />
               <Header>
                   <HeaderContent>
                    <Logo 
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />

                    <TotalCars>
                        Total de 12 Carros
                    </TotalCars>
                    </HeaderContent>
               </Header>

                <CarList
                    data={[1,2,3, 4, 5, 6, 7]}
                    keyExtractor={item => String(item)}
                    renderItem={({ item }) => <Car data={carData} />}
                /> 
           </Container>
  
      );
     
    }