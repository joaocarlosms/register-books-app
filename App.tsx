import { NativeBaseProvider } from "native-base";
import Login from './src/screens/Login/login';
import { Routes } from './routes/index';

export default function App() {
  return(
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}