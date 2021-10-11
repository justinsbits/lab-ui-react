import { render, screen } from "@testing-library/react";

import SettingsPage from "./components/pages/Settings/Settings.page";

test("Renders Dark Mode", () => {
  render(<SettingsPage />);
  const linkElement = screen.getByText(/Dark Mode/i);
  expect(linkElement).toBeInTheDocument();
});
