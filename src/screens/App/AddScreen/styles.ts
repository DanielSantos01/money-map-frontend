import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
  `;

export const ScrollArea = styled.ScrollView`
  width: auto;
  height: auto;
`;

export const InnerContainer = styled.View`
  align-items: center;
  padding: 0px 40px;
`;

export const InnerContainerCategory = styled.View`
  display: flex;
  max-width: 80%;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Title = styled.Text`
  font-size: 16px;
  margin-top: 12%;
  color: #fff;
  margin-left: -270px;
  font-family: ${({ theme }) => theme.fonts.raleway.bold};
  font-weight: 700;
  margin-bottom: -7%;
`;

export const TitleSubCat = styled.Text`
  font-size: 16px;
  margin-top: 12%;
  color: #fff;
  margin-left: -240px;
  font-family: ${({ theme }) => theme.fonts.raleway.bold};
  font-weight: 700;
  margin-bottom: -7%;
`;