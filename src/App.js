import React from "react";
import { IntlProvider } from "react-intl";
import LocalIntlTextField from "./LocalIntlTextField";
//import { TextField, IntlTextField } from "sylvester-component-library";

const intlMessages = {};

const App = () => (
  <IntlProvider locale="en" messages={intlMessages}>
    <p>
      <TextField name="text-field" />
    </p>
    <p>
      <IntlTextField name="intl-field" />
    </p>
    <p>
      <LocalIntlTextField name="local-field" />
    </p>
  </IntlProvider>
);

export default App;
