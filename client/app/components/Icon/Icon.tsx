import type { HTMLAttributes }  from 'react';
import React  from 'react';
import parse from 'html-react-parser';

interface RenderSvgProps extends HTMLAttributes<SVGElement> {
  icon: string;
}

export default function Icon({ icon, ...props }: RenderSvgProps) {
  const parsedElement = icon && parse(icon.trim());
  if (parsedElement && React.isValidElement(parsedElement)) {
    return React.cloneElement(parsedElement, props);
  }
  return null;
}
