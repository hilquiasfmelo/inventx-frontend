import React, { ComponentType, InputHTMLAttributes, useCallback, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { Container } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ComponentType<IconBaseProps>;
  isPassword?: boolean;
}

export const Input: React.FC<IProps> = ({ icon: Icon, isPassword = false, ...rest }: IProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputFilled = useCallback(() => {
    setIsFocused(false);

    // Transforme uma String em TRUE ou FALSE
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={16} />}
      <input ref={inputRef} {...rest} onFocus={handleInputFocus} onBlur={handleInputFilled} type={showPassword ? 'text' : rest.type} />
      {
        isPassword && (
          showPassword ?
            <FaEyeSlash size={16} className='icon-click' color='#A4161A' onClick={() => setShowPassword(!showPassword)} />
            :
            <FaEye size={16} className='icon-click' color='#A4161A' onClick={() => setShowPassword(!showPassword)} />
        )
      }
    </Container>
  )
}
