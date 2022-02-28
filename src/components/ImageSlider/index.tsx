import React from 'react';
                          
import { FlatList, StyleSheet, Text, View } from 'react-native';
                          
import {
    Container,
    ImageIndexes,
    ImageIndex,
    CarImageWrapper,
    CarImage,
} from './styles';

interface Props {
    imagesUrl: string[];
}
                          
export function ImageSlider({imagesUrl} :Props){
                          
   return (
     <Container>
           <ImageIndexes>
                {
                    imagesUrl.map((item, index) => (
                        <ImageIndex
                            key={String(index)}
                             active={false} />  
                    ))
                }  
            </ImageIndexes>

          
                <FlatList
                    data={imagesUrl}
                    keyExtractor={key => key}
                    renderItem={({ item }) => (
                        <CarImageWrapper>
                            <CarImage
                            source={{uri: item }}
                            resizeMode='contain'
                            />
                        </CarImageWrapper>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

              
           

        </Container>  
      );
    }