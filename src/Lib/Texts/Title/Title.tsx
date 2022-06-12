import React from 'react';
import './Title.scss';

interface ITitle {
  text: string,
  className?: string,
  style?: React.CSSProperties,
}

const Title: React.FunctionComponent<ITitle> = (props: ITitle): JSX.Element => {
  const {
    className,
    text,
    style,
  } = props;

  return (
    <h1 className={className} style={style}>
      {text}
    </h1>
  );
}

Title.defaultProps = {
  className: 'text-title',
}

export default Title;
