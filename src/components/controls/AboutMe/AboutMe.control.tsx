import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import resumePDF from "../../../assets/spokanejs-resume.pdf";

export default function SettingsControl() {
  return (
    <Card>
      <CardContent>
        <Document file={resumePDF}>
          <Page pageNumber={1} />
        </Document>
      </CardContent>
    </Card>
  );
}
