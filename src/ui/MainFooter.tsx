import { FooterProps } from 'models';
import React from 'react';

const MainFooter: React.FC<FooterProps> = ({
  children,
  dataSal,
}: FooterProps) => <footer data-sal={dataSal}>{children}</footer>;

export default MainFooter;
