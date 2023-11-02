'use client';
import { NextPage } from 'next';
import React from 'react';

const MainFooter: NextPage<FooterProps> = ({
  children,
  dataSal,
}: FooterProps) => <footer data-sal={dataSal}>{children}</footer>;

export default MainFooter;
