import { Card } from '@/components/generics/Card';
import { useNavigate } from 'react-router-dom';

export function Home(): React.JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-row gap-6 size-full">
        <div className="flex flex-col h-full">
          <Card onClick={() => navigate('/login')}>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              ipsam recusandae velit facilis asperiores vitae reiciendis labore
              nemo ratione esse nostrum cupiditate, laborum expedita dolores ea
              enim temporibus quas ex?
            </span>
          </Card>
        </div>

        <div className="flex flex-col grow">
          <Card onClick={() => navigate('/login')}>hello</Card>
        </div>
      </div>
    </>
  );
}
