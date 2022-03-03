import { FooterProps } from 'models';

const MainFooter: React.FC<FooterProps> = ({
  children,
  dataSal,
}: FooterProps) => <footer data-sal={dataSal}>{children}</footer>;

export default MainFooter;
