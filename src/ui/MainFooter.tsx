import React from 'react';

const MainFooter: React.FC<FooterProps> = ({ children }: FooterProps) => (
  <footer className='mainFooterWrapper'>{children}</footer>
);

export default MainFooter;
