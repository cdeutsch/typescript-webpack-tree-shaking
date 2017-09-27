import * as React from 'react';

export interface Engine {
  toString(): string;
}

export class V6Engine implements Engine {
  toString() {
    return 'V6';
  }
}

export class V8Engine implements Engine {
  toString() {
    return 'V8';
  }
}

export class V10Engine extends React.Component<{}, {}> implements Engine {
  toString() {
    return 'V10';
  }

  render() {
    return null;
  }
}

export function getVersion() {
  return '1.0';
}
