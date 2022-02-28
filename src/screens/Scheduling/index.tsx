import React, { useState } from 'react';
import { useTheme } from 'styled-components';                       

import { StyleSheet, Text, View } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { StatusBar } from 'react-native';
import { Calendar, DayProps, generateInterval, MarkedDateProps } from '../../components/Calendar';
import { Button } from '../../components/Button';

import ArrowSvg from '../../assets/arrow.svg'
                          
import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,


} from './styles';
import { NavigationRouteContext, useNavigation } from '@react-navigation/native';
                          
export function Scheduling(){
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
    const theme = useTheme();
    const navigation = useNavigation()

    function handleConfirmRental(){
        navigation.navigate('SchedullingDetails')
    }

    function handleReturn(){
        navigation.goBack()
    }

    function handleChangeDate (date :DayProps){
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if(start.timestamp > end.timestamp){
            start = end
            end=start
        }

        setLastSelectedDate(end)
        const interval = generateInterval(start, end)
        setMarkedDates(interval);
    }   
                          
   return (
     
           <Container>
            <Header>
                <StatusBar 
                    barStyle='light-content'
                    translucent
                    backgroundColor='transparent'
                />
                <BackButton
                 onPress={handleReturn} 
                color={theme.colors.shape}
                 /> 

                <Title>
                    Escolha uma {'\n'}
                    data de inicio e  {'\n'} 
                    fim do alugel  
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle> DE </DateTitle>
                        <DateValue selected={false}>
                             18/06/2021
                        </DateValue>
                    </DateInfo>
                 
                      <ArrowSvg />

                      <DateInfo>
                        <DateTitle> Até </DateTitle>
                        <DateValue selected={false}> 
                            18/07/2021
                        </DateValue>
                    </DateInfo>
                      
                </RentalPeriod> 
            </Header>    

            <Content>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />
            </Content>

            <Footer>
                <Button title='confirmar' onPress={handleConfirmRental}/>
            </Footer>


           </Container>
  
      );
  }