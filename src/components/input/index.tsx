import React, { ComponentType, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ComponentType<IconBaseProps>;
  isPassword?: boolean;
}


export const Input: React.FC<IProps> = ({ icon: Icon, isPassword = false, ...rest }: IProps) => {
  return (
    <Container>
      {Icon && <Icon size={16} />}
      <input {...rest} />
    </Container>
  )
}
