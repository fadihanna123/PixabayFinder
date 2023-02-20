import { LoaderProps } from 'models';
import React from 'react';

const Loader: React.FC<LoaderProps> = ({ className }: LoaderProps) => (
  <div className={className.join(' ')}></div>
);

export default Loader;
