// React
import { FC } from 'react';

import { StyledButton } from './styled';

type Props = {
  children: string;
  onClick?: () => void;
};

const Button: FC<Props> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
