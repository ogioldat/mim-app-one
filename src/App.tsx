import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as Ariakit from "@ariakit/react";


function App() {
  const dialog = Ariakit.useDialogStore();
  return (
    <>
      <Ariakit.Button onClick={dialog.toggle}>Open dialog</Ariakit.Button>
      <Ariakit.Dialog store={dialog}>
        <Ariakit.DialogHeading>Welcome</Ariakit.DialogHeading>
        <Ariakit.DialogDescription>
          Welcome to Reakit!
        </Ariakit.DialogDescription>
      </Ariakit.Dialog>
    </>
  );
}
export default App
