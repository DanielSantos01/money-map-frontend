import React, { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import API_BASE_URL from '@/utils/constants';
import { useAxios } from '@/utils/useAxios';
import { useAuth } from '@/hooks';

import {
  RoundButton,
  ConfigInput,
  HeaderWithReturn,
  CategorySelector,
} from '../../../components';
import { MainProps } from './interfaces';

dayjs.extend(customParseFormat);

import * as S from './styles';

const Main: React.FC<MainProps> = ({ onChange, formulary }) => {
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    [],
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [subCategory, setSubCategory] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCat, setSubCat] = useState('');

  const { userData } = useAuth();
  const [axiosPost] = useAxios('post');

  const { navigate } =
    useNavigation<NativeStackNavigationProp<{ Home: undefined }>>();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/subcategory`)
      .then((data) => setSubCategory(data.data.data));
  }, []);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/category`)
      .then((data) => setCategory(data.data.data));
  }, []);

  const handleAdd = async () => {
    try {
      const { data } = await axiosPost({
        url: '/costs',
        body: {
          userId: userData.id,
          name: formulary.name,
          description: formulary.description,
          value: formulary.value,
          subCategoryId: subCat,
          date: dayjs(
            formulary.date.replaceAll('/', '-'),
            'DD-MM-YYYY',
          ).toISOString(),
        },
      });

      await axiosPost({
        url: `/costs/remove-money/${data.data.id}`,
        body: {
          value: formulary.value,
        },
        success: () => {
          navigate('Home');
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeSubCategory = (id: string) => {
    setSelectedSubCategories((subCategories) => {
      if (subCategories.includes(id)) {
        return subCategories.filter((sb) => sb !== id);
      }

      setSubCat(id);
      return [...subCategories, id];
    });
  };

  const handleChangeCategory = (id: string) => {
    setSelectedCategories((categories) => {
      if (categories.includes(id)) {
        return categories.filter((cat) => cat !== id);
      }

      return [...categories, id];
    });
  };

  return (
    <S.Container>
      <S.ScrollArea>
        <S.InnerContainer>
          <HeaderWithReturn title="Adicionar" />

          <ConfigInput
            label="Nome"
            placeholder="Nome"
            onChange={onChange('name')}
            value={formulary.name}
          />

          <ConfigInput
            label="Descrição"
            placeholder="Descrição"
            onChange={onChange('description')}
            value={formulary.description}
          />

          <ConfigInput
            label="Data"
            placeholder="DD/MM/YYYY"
            onChange={onChange('date')}
            value={formulary.date}
          />

          <ConfigInput
            label="Valor"
            placeholder="R$2.000,00"
            onChange={onChange('value')}
            value={formulary.value}
            keyBoardType="numeric"
          />

          <S.Title>Categoria</S.Title>
          <S.InnerContainerCategory>
            {category?.map((cat) => {
              const isSelected = selectedCategories.includes(cat.id);

              return (
                <CategorySelector
                  key={cat.id}
                  label={cat.name}
                  value="database"
                  onChange={handleChangeCategory}
                  id={cat.id}
                  toggle={isSelected}
                />
              );
            })}
          </S.InnerContainerCategory>

          <S.TitleSubCat>Sub Categoria</S.TitleSubCat>
          <S.InnerContainerCategory>
            {subCategory?.map((subCat) => {
              const isSelected = selectedSubCategories.includes(subCat.id);

              return (
                <CategorySelector
                  key={subCat.id}
                  label={subCat.name}
                  value="shopping-bag"
                  onChange={handleChangeSubCategory}
                  id={subCat.id}
                  toggle={isSelected}
                />
              );
            })}
          </S.InnerContainerCategory>

          <RoundButton
            id="add-btn"
            mode="light"
            label="Adicionar"
            style={{ marginBottom: '10%' }}
            onPress={handleAdd}
          />
        </S.InnerContainer>
      </S.ScrollArea>
    </S.Container>
  );
};

export default Main;
