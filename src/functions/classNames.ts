export default function classNames(...classes: (string | undefined | null)[]) {
  return [...classes].join(' ');
}
