import React from 'react';
                           
import { BackButton } from '../../components/BackButton'; 
import { ImageSlider } from '../../components/ImageSlider';

                          
import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,

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

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                   <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent> 
                </Details>

                <About>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Sit voluptatum vel, saepe, temporibus voluptatem aperiam 
                  earum laudantium est iste commodi cum nam veritatis quia 
                </About>
            </Content>

           </Container>
  
      ); 
    }