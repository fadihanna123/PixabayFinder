/**
 * @param { JSX.Element } children
 * @param { string } dataSal
 */
export class FooterProps {
  constructor(public children: JSX.Element, public dataSal: string) {}
}

/**
 * @param { string[] } className
 */
export class LoaderProps {
  constructor(public className: string[]) {}
}
