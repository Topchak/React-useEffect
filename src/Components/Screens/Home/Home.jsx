import {useState} from "react";
import Input from "../../UI/Input/Input";
import Coutner from "./Counter/Counter";
import ButtonAdd from "../../UI/Buttons/Button-Add/ButtonAdd";
import styles from "./Home.module.css";
function Home() {
  const [count,
    setCount] = useState(0);
  const onClick = (num) => {
    setCount(count + num)
  }

  return (
    <div>
      <Coutner count={count}/>
      <Input setCount={setCount}/>
      <div className={styles.buttons__wrapper}>
        <ButtonAdd text={"Add + 1"} onClick={() => onClick(1)}/>
        <ButtonAdd text={"Add + 2"} onClick={() => onClick(2)}/>
        <ButtonAdd text={"Add + 3"} onClick={() => onClick(3)}/> {count > 10 && count < 200 && (<ButtonAdd text={"More"} onClick={() => setCount(count + 10)}/>)}
        {count > 0 && <ButtonAdd text={"Reset"} onClick={() => setCount(0)}/>}
      </div>
    </div>
  );
}

export default Home;
