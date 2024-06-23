interface CardProps {
  className?: string;
  title?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export function Card({ className, title, children, onClick }: CardProps) {
  return (
    <div
      className={
        'block max-w-sm p-6 rounded-xl shadow transition-all ' +
        'bg-white border border-gray-200 hover:bg-gray-100 ' +
        'dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700 ' +
        (onClick ? 'cursor-pointer ' : '') +
        (className ? className : '')
      }
      onClick={onClick}
    >
      {title && (
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      )}
      <p className="font-normal text-gray-700 dark:text-gray-400">{children}</p>
    </div>
  );
}
