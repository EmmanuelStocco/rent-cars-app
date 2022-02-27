import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import Logo from '../../assets/logo.svg'
import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

                          
import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList
} from './styles';
import { useNavigation, CommonActions  } from '@react-navigation/native';
import { CarDetails } from '../CarDetails';

                          
export function Home(){     
    const [cars, setCars] = useState<CarDTO[]>([]);    
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation ()

      
    function handleCarDetails(car :CarDTO) {
         navigation.navigate('CarDetails', { car })
      }
    
      useEffect(() => {
        async function fetchCars(){
            try {
                const response = await api.get('/cars');
                setCars(response.data) 
            } catch (error) {
                console.log(error)
            }  finally{
                setLoading(false)
            }        
        }
        fetchCars();
      }, []);
    
   return ( 
           <Container>
               <StatusBar 
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
                { loading ? <Load /> :
                    <CarList
                        data={cars}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) => 
                            <Car data={item} onPress={() => handleCarDetails(item)} 
                        />}
                    /> 
                }
           </Container>
  
      );
     
    }