import { Link } from 'react-router-dom';
import { LinkStyledComponent } from './LinkStyledComponent';
import type { LinkStyledProps } from './LinkStyledProps';

const LinkStyled = (props: LinkStyledProps) => {
  const { To, Label } = props;
  return (
    <LinkStyledComponent
      linkHeight={props.linkHeight}
      linkWidth={props.linkWidth}
      fontSize={props.fontSize}
      color={props.color}>
      <Link to={To}>{Label}</Link>
    </LinkStyledComponent>
  );
};

export default LinkStyled;
