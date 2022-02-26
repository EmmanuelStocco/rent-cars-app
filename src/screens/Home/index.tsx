import React from 'react';
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'

import { Car } from '../../components/Car';
                          
import {
    Container,
    Header,
    TotalCars,
    HeaderContent
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

    const carData2 = {
        brand: 'Porche',
        name: 'Panamera',
        rent: {
            period: 'Ao-dia',
            price: 340
        },
        thumbnail: 'https://www.pngplay.com/wp-content/uploads/12/Porsche-PNG-Pic-Clip-Art-Background.png'
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

               <Car data={carData} />
               <Car data={carData2} />
           </Container>
  
      );
     
    }