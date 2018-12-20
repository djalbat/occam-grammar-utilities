'use strict';

require('juxtapose');

const easy = require('easy');

const View = require('./example/view');

const { Body } = easy;

const body = new Body();

body.append(

  <View />

);
