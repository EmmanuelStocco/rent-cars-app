import React from 'react';
import { useNavigation } from '@react-navigation/native'
                           
import { BackButton } from '../../components/BackButton'; 
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg'
import acellerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'

                          
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
    Acessories,
    Footer,


} from './styles';
                          
export function CarDetails(){
    const navigation = useNavigation();
    function handleConfirmRental(){ 
        navigation.navigate('Scheduling')
     }
                          
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

                <Acessories>
                    <Acessory name="380Km/h" icon={speedSvg}/>
                    <Acessory name="3.2s" icon={acellerationSvg}/>
                    <Acessory name="800 HP" icon={forceSvg}/>
                    <Acessory name="Gasolina" icon={gasolineSvg}/>
                    <Acessory name="Auto" icon={exchangeSvg}/>
                    <Acessory name="2 pessoas" icon={peopleSvg}/>
                </Acessories>

                <About>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Sit voluptatum vel, saepe, temporibus voluptatem aperiam 
                  earum laudantium est iste commodi cum nam veritatis quia 
                </About>
            </Content>

            <Footer>
                <Button title='Escolher periodo do aluguel' color='' onPress={handleConfirmRental} />
            </Footer>

           </Container>
  
      ); 
    }