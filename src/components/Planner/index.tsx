// React
import { FC, useEffect, useState } from 'react';

// Libraries
import moment from 'moment';
import NumberFormat from 'react-number-format';

// Assets
import BabySVG from 'assets/icons/have-a-baby.svg';
import CarSVG from 'assets/icons/buy-a-car.svg';
import CollegeSVG from 'assets/icons/go-to-college.svg';
import EmergencySVG from 'assets/icons/build-an-emergency-fund.svg';
import HouseSVG from 'assets/icons/buy-a-house.svg';
import VacationSVG from 'assets/icons/take-a-vacation.svg';
import WeddingSVG from 'assets/icons/throw-a-wedding-party.svg';

// Custom
import {
  Description,
  Number,
  Subtitle,
  Text,
  Title,
} from 'components/UI/Typography';
import {
  Block,
  Card,
  DateContainer,
  Footer,
  Header,
  InputContainer,
  ResultContainer,
  ResultDescription,
  ResultMonthly,
} from './styled';
import { Icon } from 'components/UI/Images';
import Amount from 'components/Amount';
import ReachDate from 'components/ReachDate';
import Button from 'components/Button';

type Props = {
  type?:
    | 'baby'
    | 'car'
    | 'college'
    | 'emergency'
    | 'house'
    | 'vacation'
    | 'wedding';
};

type ContentType = {
  title: string;
  icon: string;
};

const contentByType = (type?: string): ContentType => {
  switch (type) {
    case 'baby':
      return {
        title: 'Have a baby',
        icon: BabySVG,
      };
    case 'car':
      return {
        title: 'Buy a car',
        icon: CarSVG,
      };
    case 'college':
      return {
        title: 'Go to college',
        icon: CollegeSVG,
      };
    case 'emergency':
      return {
        title: 'Build an emergency fund',
        icon: EmergencySVG,
      };
    case 'house':
      return {
        title: 'Buy a house',
        icon: HouseSVG,
      };
    case 'vacation':
      return {
        title: 'Take a vacation',
        icon: VacationSVG,
      };
    case 'wedding':
      return {
        title: 'Throw a wedding party',
        icon: WeddingSVG,
      };
    default:
      return {
        title: 'Buy a house',
        icon: HouseSVG,
      };
  }
};

const Planner: FC<Props> = ({ type }) => {
  const [amount, setAmount] = useState<number | undefined>();
  const [monthlyAmount, setMonthlyAmount] = useState(0);
  const [months, setMonths] = useState(1);
  const [date, setDate] = useState<string>(
    moment().add(1, 'month').toISOString()
  );
  const { title, icon } = contentByType(type);

  useEffect(() => {
    if (amount) {
      const startMonth = moment();
      const monthDiff = moment(date).diff(startMonth, 'months') + 1;
      const monthlyDeposits = Math.ceil(amount / monthDiff);
      setMonthlyAmount(monthlyDeposits);
      setMonths(monthDiff);
    }
  }, [amount, date]);

  const handleAmountChange = (value?: number) => {
    setAmount(value);
  };

  const decreaseMonth = () => {
    setDate((prevState) => {
      const newDate = moment(prevState);
      return newDate.subtract(1, 'month').toISOString();
    });
  };

  const increaseMonth = () => {
    setDate((prevState) => {
      const newDate = moment(prevState);
      return newDate.add(1, 'month').toISOString();
    });
  };

  return (
    <Card>
      <Header>
        <Icon src={icon} />
        <Block>
          <Title>{title}</Title>
          <Description>Saving goal</Description>
        </Block>
      </Header>
      <InputContainer>
        <Amount
          label="Total amount"
          onChange={handleAmountChange}
          value={amount}
        />
      </InputContainer>
      <DateContainer>
        {date && (
          <ReachDate
            label="Reach gol by"
            onClickLeft={decreaseMonth}
            onClickRight={increaseMonth}
            value={date}
          />
        )}
      </DateContainer>
      <ResultContainer>
        <ResultMonthly>
          <Subtitle>Monthly Amount</Subtitle>
          <Number>
            ${' '}
            <NumberFormat
              value={monthlyAmount}
              displayType="text"
              thousandSeparator={true}
            />
          </Number>
        </ResultMonthly>
        <ResultDescription>
          {amount && (
            <Text>
              You’re planning <strong>{months} monthly deposits</strong> to
              reach your{' '}
              <strong>
                $
                <NumberFormat
                  value={amount}
                  displayType="text"
                  thousandSeparator={true}
                />
              </strong>{' '}
              goal by <strong>{moment(date).format('MMMM yyyy')}</strong>.
            </Text>
          )}
        </ResultDescription>
      </ResultContainer>
      <Footer>
        <Button>Confirm</Button>
      </Footer>
    </Card>
  );
};

export default Planner;
