import tsx from "typescript"

export default function reactStrToComponent(jsxString: string, React : any, { Typography, Button, Stack, Grid, Container, TextField} : any): any {
    const tsxString = jsxString.replace(/class=/g, 'className=');
  
    const transpiledCode = tsx.transpile(tsxString, {
      target: tsx.ScriptTarget.ES2015,
      module: tsx.ModuleKind.ESNext,
      jsx: tsx.JsxEmit.React,
      jsxFactory: 'React.createElement'
    });
    
    const component = eval(`() => {${transpiledCode}}`);
    return component;
  }
  