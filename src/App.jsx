import { useState } from "react";
import StateControl from "./components/StateManager";
import Level1 from "./components/DeepNestedStructure";
import {
  AppContainer,
  Content,
  DeepStructure,
} from "./styles/StyledComponents";
import { TestContext } from "./context/TestContext";

// prop drilling 브랜치
function App() {
  const [message, setMessage] = useState("");

  return (
    <AppContainer>
      <h2>[내배캠] 스탠다드반 프로젝트 - Prop Drilling 예제</h2>
      <Content>
        <StateControl onMessageChange={setMessage} />
        <DeepStructure>
          <TestContext.Provider value={{ message }}>
            <Level1 message={message} />
          </TestContext.Provider>
        </DeepStructure>
      </Content>
    </AppContainer>
  );
}

export default App;
