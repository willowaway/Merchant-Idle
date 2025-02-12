export interface Node {
  name: string;
  to?: string;
  icon?: string;
  heading?: boolean;
  sub?: Array<Node>;
  subActivePaths?: string;
  badge?: boolean;
  target?: string;
  badgeVariant?: string;
  src?: string;
}
