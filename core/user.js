import {div} from './element';
import {onClick} from './event';
import {createComponent} from './index';

const template = ({firstName, lastName, methods}) =>
  div`${onClick(() =>
    methods.changeName('Thomas'),
  )} Hello ${firstName} ${lastName}`;

const initialState = {firstName: 'Dmitriy', lastName: 'Smal'};

const methods = {
  changeName: (state, firstName) => ({...state, firstName}),
};

export const User = createComponent({template, methods, initialState});
