import { JSDOM, DOMWindow } from 'jsdom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GlobalWithFetchMock } from 'jest-fetch-mock';

Enzyme.configure({ adapter: new Adapter() });

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props as any);
}

declare const global: GlobalWithFetchMock & {
  window: DOMWindow;
  document: Document;
  navigator: {
    userAgent: string;
  };
};

global.window = window;
global.document = window.document;
global.fetch = require('jest-fetch-mock');

global.fetchMock = global.fetch;

global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

console.error = jest.fn(); // eslint-disable-line no-console
