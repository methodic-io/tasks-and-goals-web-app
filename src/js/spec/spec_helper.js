import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, render, shallow } from 'enzyme';

const expect = chai.expect;
chai.use(chaiEnzyme());

export { React, mount, render, shallow, expect };
