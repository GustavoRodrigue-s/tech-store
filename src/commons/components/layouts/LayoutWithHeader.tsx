import { Header } from '../modules';

interface LayoutWithHeaderProps {
  children: React.ReactNode;
}

export const LayoutWithHeader: React.FC<LayoutWithHeaderProps> = ({
  children,
}) => (
  <>
    <Header />
    {children}
  </>
);
