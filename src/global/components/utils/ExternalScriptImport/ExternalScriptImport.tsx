import React from "react";

import { IExternalScriptImportProps } from "./types";

export default function ExternalScriptImport({
  scripts,
}: IExternalScriptImportProps) {
  return <div>{scripts}</div>;
}
