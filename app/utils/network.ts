import _ from 'lodash';

// given an IP address, generate a list of IP
// addresses to ping in order of proximity
export function generateIPRange(ipAddress: string, limit: number): string[] {
  const octets = ipAddress.split('.');
  const prefix = _.take(octets, 3);
  const suffix = _.last(octets);
  if (!suffix) {
    return [];
  }

  const addresses = [];
  const address = _.parseInt(suffix);
  let over = address + 1;
  let under = address - 1;

  const isPastUpperBound = () => over > 255 || over > address + limit;
  const isPastLowerBound = () => under < 0 || under > address - limit;

  while (!isPastUpperBound() || !isPastLowerBound()) {
    if (!isPastUpperBound()) {
      addresses.push(over++);
    }
    if (!isPastLowerBound()) {
      addresses.push(under--);
    }
  }

  return _.map(
    addresses,
    (octet) => _.join([...prefix, octet], '.')
  );
}
