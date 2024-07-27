import Main from "./Main";
import {NextUIProvider} from "@nextui-org/react";

export default function App(){
  return(
    <NextUIProvider>
        <Main />
    </NextUIProvider>
  )
}