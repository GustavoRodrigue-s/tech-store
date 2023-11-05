import { InputHTMLAttributes } from 'react';
import { BsSearch } from 'react-icons/bs';

import { Input } from '../Input';

import * as S from './styles';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

export const SearchInput: React.FC<SearchInputProps> = props => (
  <S.Container>
    <Input type="text" {...props} />
    <BsSearch size={20} />
  </S.Container>
);
