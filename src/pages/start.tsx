import {InfoWidget} from '@app/components/infoWidget.tsx';
import {getFlagValue} from "@app/flagsmithClient.ts";

export default function Start() {
  const pluginC = getFlagValue("plugin_c");

  return (
    <>
      <h1>Start Page</h1>
      <br/>
      {pluginC &&
        <InfoWidget/>
      }
    </>
  );
}