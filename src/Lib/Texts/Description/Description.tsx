import React from 'react';
import './Description.scss';

interface IDescription {
  text: string,
  className?: string,
  style?: React.CSSProperties,
}

const Description: React.FunctionComponent<IDescription> = (props: IDescription): JSX.Element => {
  const {
    className,
    text,
    style,
  } = props;

  return (
    <h2 className={className} style={style}>
      {text}
    </h2>
  );
}

Description.defaultProps = {
  className: 'text-description',
}

export default Description;
