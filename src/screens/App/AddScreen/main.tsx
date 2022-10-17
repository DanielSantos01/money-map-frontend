import React, { useEffect, useState } from 'react';

import { RoundButton, ConfigInput, HeaderWithReturn, CategorySelector } from '../../../components';
import { MainProps } from './interfaces';
import * as S from './styles';
import { useAxios } from '@/utils/useAxios';
import axios from 'axios';

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
  const [subCat, setSubCat] = useState();
  const [axiosGet] = useAxios('get');

  useEffect(() => {
    axios.get('http://172.22.76.25:8080/subCategory').then((data) => setSubCategory(data.data.data));
  }, [axios]);

  useEffect(() => {
    axios.get('http://172.22.76.25:8080/category').then((data) => setCategory(data.data.data));
  }, [axios])


  const handleAdd = async () => {
    console.log(formulary);
    console.log(subCategory[0]);

    await axiosPost({
      url: '/costs',
      body: {
        name: formulary.name,
        description: formulary.description,
        value: formulary.value,
        date: formulary.date,
        subCategoryId: subCat,
        userId: "000e758f-8eb6-457c-bfb1-37c0bccb0c65",
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
            {category.map((cat) => {
              const isSelected = selectedCategories.includes(cat.id);

              return (
                <CategorySelector key={cat.id} label={cat.name} value="database" onChange={handleChangeCategory} id={cat.id} toggle={isSelected}/>
              )
            })}

          </S.InnerContainerCategory>

          <S.TitleSubCat>Sub Categoria</S.TitleSubCat>
          <S.InnerContainerCategory>

            {subCategory.map((subCat) => {
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
