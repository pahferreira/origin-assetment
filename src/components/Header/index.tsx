import { Container, Logo } from './styled';

type Props = {
  logoUrl: string;
};

export default function Header({ logoUrl }: Props): JSX.Element {
  return (
    <Container>
      <Logo src={logoUrl} />
    </Container>
  );
}
