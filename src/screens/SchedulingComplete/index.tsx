import React from 'react'; 
import { useWindowDimensions } from 'react-native'

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg'

import { ConfirmButtom } from '../../components/ConfirmButtom';

import {
    Container,
    Content,
    Title,
    Message,
    Footer,
} from './styles'; 
                          
export function SchedulingComplete(){
   const { width } = useWindowDimensions();                         
   return ( 
        <Container>
            <LogoSvg width={width} />

            <Content>
                <DoneSvg width={80} height={80}/>
                <Title> Carro Alugado! </Title>

                <Message>
                    Lorem, ipsum dolor sit amet {'\n'} 
                    consectetur adipisicing elit. {'\n'}
                    Dolorum quasi dicta, quia 
                </Message>
            </Content>

            <Footer>
                <ConfirmButtom title='Ok' />
            </Footer>
                          
        </Container>
  
      ); 
    }