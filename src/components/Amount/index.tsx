// React
import { FC } from 'react';

// Libraries
import { NumberFormatValues } from 'react-number-format';

// Assets
import DollarSVG from 'assets/icons/dollar.svg';

// Custom
import { Container, Content, Icon, InputNumber } from './styled';
import { Label } from 'components/UI/Typography';

type Props = {
  label: string;
  onChange: (value?: number) => void;
  value?: number;
};

const Amount: FC<Props> = (props) => {
  const { label, onChange, value } = props;

  const handleChange = (values: NumberFormatValues) => {
    onChange(values.floatValue);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Content>
        <Icon src={DollarSVG} />
        <InputNumber
          thousandSeparator={true}
          onValueChange={handleChange}
          value={value}
          data-testid="amountInput"
        />
      </Content>
    </Container>
  );
};

export default Amount;
