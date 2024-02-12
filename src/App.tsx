import './App.css';
// import Button from './components/Button/Button';
import Tabs from './components/Tabs/Tabs';
import Title from './components/Title/Title';

export default function App() {
  // const onClickHi = function(): void {
  //   alert("hi")
  // }
  // const onClickBye = function(): void {
  //   alert("Bye")
  // }
  return (
    <>
    {/* <Button clickFunction={onClickHi} text="Click"></Button>
    <Button clickFunction={onClickBye} text="Submit"></Button> */}
    
    <Title text="Sign In"></Title>

    <Tabs></Tabs>
    </>
  );
}
