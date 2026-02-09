import RJSFForm from "@rjsf/antd";
//import RJSFForm from "@rjsf/core";
import type Form from "@rjsf/core";
import type { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const SOME_SCHEMA: RJSFSchema = {
  type: "object",
  required: ["notes"],
  properties: {
    notes: {
      type: "string",
      title: "Notes",
    }
  }
};

function App() {
  const formRef = useRef<Form>(null)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <RJSFForm ref={formRef} schema={SOME_SCHEMA} validator={validator} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
