import React, { useState, useEffect } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { CarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';
import { NavigationRouteContext, useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
} from './styles';
import { Car } from '../../components/Car';

interface CarProps {
  car: CarDTO;
  id: string;
  user_id: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const navigation = useNavigation()

  function handleReturn() {
    navigation.goBack()
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1');
        console.log(response.data)
        setCars(response.data)
      } catch (error) {
        console.log(error)
      }
      finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

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

        <SubTitle>
          Conforto, segurança e praticidade.
        </SubTitle>

      </Header>

      <Content>
        <Appointments>
          <AppointmentsTitle> Agendamentos feitos </AppointmentsTitle>
          <AppointmentsQuantity> 05 </AppointmentsQuantity> 
        </Appointments>

        <FlatList
            data={cars}
            keyExtractor={items => items.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              
              <Car data={item.car} />)}
        />

      </Content>
    </Container>

  );

}