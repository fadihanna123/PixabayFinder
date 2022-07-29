import { LoaderProps } from 'models';

const Loader: React.FC<LoaderProps> = ({
  className,
}: LoaderProps) => <div className={className.join(' ')}></div>;

export default Loader;
