import React from 'react';
import './Title.scss';

interface ITitle {
  text: string,
  className?: string,
}

const Title: React.FunctionComponent<ITitle> = (props: ITitle): JSX.Element => {
  const {
    className,
    text,
  } = props;

  return (
    <h1 className={className}>
      {text}
    </h1>
  );
}

Title.defaultProps = {
  className: 'text-title',
}

export default Title;
