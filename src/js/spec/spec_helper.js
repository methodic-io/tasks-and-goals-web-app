import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, render, shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

const muiTheme = getMuiTheme();
const shallowWithContext = (node) => shallow(node, { context: { muiTheme } });

// Needed for onTouchTap (this is a pre-requisite for Material UI)
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const expect = chai.expect;
chai.use(chaiEnzyme());

export { React, mount, render, shallow, expect, shallowWithContext, MuiThemeProvider };
