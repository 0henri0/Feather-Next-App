/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import { Index } from '../src/pages/index.js'

const mockStore = configureMockStore();
const store = mockStore({});

describe("Index Component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(
        <Provider store={store}>
          <Index />
        </Provider>
      ).find(Index).dive().find('h2').text()
    ).toBe('Index page');
  });
});
