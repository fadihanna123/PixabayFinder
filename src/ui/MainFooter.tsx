import { MainFooterWrapper } from '@core/styles/footerStyles';
import React from 'react';

const MainFooter: React.FC<FooterProps> = ({ children }: FooterProps) => (
  <MainFooterWrapper>{children}</MainFooterWrapper>
);

export default MainFooter;
