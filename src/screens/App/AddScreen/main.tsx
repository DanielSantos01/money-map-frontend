import React, { useEffect, useState } from 'react';

import { RoundButton, ConfigInput, HeaderWithReturn, CategorySelector } from '../../../components';
import { MainProps } from './interfaces';
import * as S from './styles';
import { useAxios } from '@/utils/useAxios';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Main: React.FC<MainProps> = ({
  name,
  setName,
  description,
  setDescription,
  date,
  setDate,
  value,
  setValue,
  onChange,
  formulary,
}) => {
  const [axiosPost] = useAxios('post');
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [subCategory, setSubCategory] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCat, setSubCat] = useState('');
  const [axiosGet] = useAxios('get');

  const { navigate } = useNavigation();

  useEffect(() => {
       axios.get('http://192.168.15.35:8080/subCategory').then((data) => setSubCategory(data.data.data));
  }, []);

  useEffect(() => {
      axios.get('http://192.168.15.35:8080/category').then((data) => setCategory(data.data.data));
  }, [])
  
  const handleAdd = async () => {
    await axiosPost({
      url: '/costs',
      body: {
        name: formulary.name,
        description: formulary.description,
        value: formulary.value,
        date: formulary.date,
        subCategoryId: '91f62a20-d856-46f4-b6b9-06af213c1341',
        userId: "271dd653-b45d-40b9-b9a5-020fe5c08af8",
      },
    });

    await axiosPost({
      url: '/costs/remove-money/b2f4fcf7-ba8e-499a-bd04-30d64eb1701e',
      body: {
        value: formulary.value
      },
      success: () => {
        navigate('Home');
      },
    });

  };

  const handleChangeSubCategory = (id: string) => {
    setSelectedSubCategories((subCategories) => {
      if (subCategories.includes(id)) {
        return subCategories.filter((sb) => sb !== id);
      };

      return [...subCategories, id];
    });
  };

  const handleChangeCategory = (id: string) => {
    setSelectedCategories((categories) => {
      if (categories.includes(id)) {
        return categories.filter((cat) => cat !== id);
      };

      return [...categories, id];
    });
  };

  console.log('AAAAAAAAAAAAAAAAAAAAAAAAA', subCat);

  return (
    <S.Container>
      <S.ScrollArea>  
        <S.InnerContainer>

          <HeaderWithReturn title='Adicionar'/>

          <ConfigInput
            label='Nome'
            placeholder='Nome'
            onChange={onChange('name')}
            value={formulary.name}
          />

          <ConfigInput
            label='Descrição'
            placeholder='Descrição'
            onChange={onChange('description')}
            value={formulary.description}
          />

          <ConfigInput
            label='Data'
            placeholder='DD/MM/YYYY'
            onChange={onChange('date')}
            value={formulary.date}
          />

          <ConfigInput
            label='Valor'
            placeholder='R$2.000,00'
            onChange={onChange('value')}
            value={formulary.value}
            keyBoardType='numeric'
          />

          <S.Title>Categoria</S.Title>
          <S.InnerContainerCategory>
            {category?.map((cat) => {
              const isSelected = selectedCategories.includes(cat.id);

              return (
                <CategorySelector key={cat.id} label={cat.name} value="database" onChange={handleChangeCategory} id={cat.id} toggle={isSelected}/>
              )
            })}

          </S.InnerContainerCategory>

          <S.TitleSubCat>Sub Categoria</S.TitleSubCat>
          <S.InnerContainerCategory>

            {subCategory?.map((subCat) => {
              const isSelected = selectedSubCategories.includes(subCat.id);

              return (
                <CategorySelector key={subCat.id} label={subCat.name} value="shopping-bag" onChange={handleChangeSubCategory} id={subCat.id} toggle={isSelected} setCat={() => setSubCat(subCat.id)}/>
              )
            })}
          </S.InnerContainerCategory>

          <RoundButton id='add-btn' mode='light' label='Adicionar' style={{marginBottom:'10%'}} onPress={handleAdd}/>

        </S.InnerContainer>
      </S.ScrollArea>
    </S.Container>
  );
};

export default Main;
