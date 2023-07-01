import { HTMLAttributes } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { Input } from '../Input';

import * as S from './styles';

interface SearchInputProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ value, ...rest }) => (
  <S.Container>
    <Input type="text" {...rest} />
    <AiOutlineSearch size={36} />
  </S.Container>
);
