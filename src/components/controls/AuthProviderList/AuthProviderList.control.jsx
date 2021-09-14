import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { Box, ButtonGroup, Button } from "@material-ui/core";

import authProviders from "../../../data/static/authProviders";

export function AuthProviderList(props) {
  // Properties
  const { gutterBottom /*, performingAction*/ } = props;

  // Events
  const { onAuthProviderClick } = props;

  return (
    <Box mb={gutterBottom ? 3 : 0}>
      <ButtonGroup
        // disabled={performingAction}
        fullWidth
        orientation="vertical"
        variant="outlined"
      >
        {authProviders.map((authProvider) => {
          const AuthProviderButton = withStyles({
            root: {
              color: authProvider.color,
            },
          })(Button);

          return (
            <AuthProviderButton
              key={authProvider.id}
              startIcon={authProvider.icon}
              onClick={() => onAuthProviderClick(authProvider)}
            >
              {authProvider.name}
            </AuthProviderButton>
          );
        })}
      </ButtonGroup>
    </Box>
  );
}
