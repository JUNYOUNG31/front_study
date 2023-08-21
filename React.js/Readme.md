유니티 빌드해서 빌드 하는 법



빌드 파일을 public 폴더 안에 넣고 Function App() 에 유니티 추가
경로 설정해주고

```
import logo from './logo.svg';
import './App.css';
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";


const unityContext = new UnityContext({
  loaderUrl: "Build/build.loader.js",
  dataUrl: "Build/build.data",
  frameworkUrl: "Build/build.framework.js",
  codeUrl: "Build/build.wasm",
});

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Unity unityContext={unityContext} />
    </div>
  );
}
```
