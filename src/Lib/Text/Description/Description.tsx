import React from 'react';
import './Description.scss';

interface IDescription {
  text: string,
  className?: string,
}

const Description: React.FunctionComponent<IDescription> = (props: IDescription): JSX.Element => {
  const {
    className,
    text,
  } = props;

  return (
    <span className={className}>
      {text}
    </span>
  );
}

Description.defaultProps = {
  className: 'text-description',
}

export default Description;
