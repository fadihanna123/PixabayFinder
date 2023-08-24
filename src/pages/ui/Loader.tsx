import { NextPage } from 'next';
import React from 'react';

const Loader: NextPage<LoaderProps> = ({ className }: LoaderProps) => (
  <div className={className?.join(' ')}></div>
);

export default Loader;
