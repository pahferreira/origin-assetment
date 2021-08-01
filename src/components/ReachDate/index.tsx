// React
import { FC } from 'react';

// Libraries
import moment from 'moment';

// Assets
import LeftArrowSVG from 'assets/icons/left-arrow.svg';
import RightArrowSVG from 'assets/icons/right-arrow.svg';

// Custom
import { Button, Container, Content, Date, Icon, Month, Year } from './styled';
import { Label } from 'components/UI/Typography';

type Props = {
  label: string;
  onClickLeft: () => void;
  onClickRight: () => void;
  value?: string;
};

const ReachDate: FC<Props> = (props) => {
  const { label, onClickLeft, onClickRight, value } = props;
  const momentDate = moment(value);

  const handleClickLeft = () => {
    const nextMonthDate = moment().add(1, 'month');
    if (momentDate.isAfter(nextMonthDate, 'month')) {
      onClickLeft();
    }
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Content>
        <Button data-testid="leftButton" onClick={handleClickLeft}>
          <Icon src={LeftArrowSVG} />
        </Button>
        <Date>
          <Month>{momentDate.format('MMMM')}</Month>
          <Year>{momentDate.year()}</Year>
        </Date>
        <Button data-testid="rightButton" onClick={onClickRight}>
          <Icon src={RightArrowSVG} />
        </Button>
      </Content>
    </Container>
  );
};

export default ReachDate;
