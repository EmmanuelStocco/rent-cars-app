import React from 'react';
                          
import { StyleSheet, Text, View } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

                          
import {
    Container,
    Header,
    CarImages,
} from './styles';
                          
export function CarDetails(){
                          
   return ( 
           <Container>
                <Header>
                    <BackButton onPress={() => {}} /> 
                </Header>   

            <CarImages>
                <ImageSlider  imagesUrl={['https://www.pngplay.com/wp-content/uploads/13/Audi-RS5-PNG-Free-File-Download.png']} />
            </CarImages>             
           </Container>
  
      ); 
    }