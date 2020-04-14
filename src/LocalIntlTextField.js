import React from "react";
import { injectIntl } from "react-intl";

const LocalTextField = ({ name, intl }) => (
  <input
    type="text"
    name={name}
    placeholder={intl.formatMessage({ id: "placeholder" })}
  />
);
export const LocalIntlTextField = injectIntl(LocalTextField);
