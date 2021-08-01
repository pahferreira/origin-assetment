// React
import { FC } from 'react';

// Custom
import { Main } from './styled';
import { Subtitle } from 'components/UI/Typography';
import Planner from 'components/Planner';

const Home: FC = () => {
  return (
    <Main>
      <Subtitle margin>
        {"Let's plan your "}
        <strong>saving goal</strong>
      </Subtitle>
      <Planner />
    </Main>
  );
};

export default Home;
