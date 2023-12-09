'use client';
import { NextPage } from 'next';
import React from 'react';

const MainFooter: NextPage<FooterProps> = ({ children }: FooterProps) => (
  <footer>{children}</footer>
);

export default MainFooter;
