import React from 'react';

import clsxm from '@/lib/clsxm';

export type CardProps = React.FC<
  React.ComponentPropsWithRef<'div'> & {
    children?: React.ReactNode;
  }
>;
const Card: CardProps = ({ children, className, ...rest }) => {
  return (
    <div
      className={clsxm(`my-4 rounded-[25px] bg-white px-6 py-5`, className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;

export const CardTitle: React.FC<
  React.ComponentPropsWithRef<'h1'> & {
    children: string;
  }
> = ({ className, children, ...rest }) => {
  return (
    <h1
      className={clsxm(
        `text-[20px] text-lg font-semibold text-text`,
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
};
