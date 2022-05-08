import styled from "styled-components";
import Toggle from "../Toggle";

const SettingsModalStyled = styled.div`
  padding: 1rem 0;

  & h4 {
    font-size: var(--fs-1);
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }
`;

function SettingsModal() {
  return (
    <SettingsModalStyled>
      <h4>Settings</h4>
      <div>
        <span>Add new notes to top</span> <Toggle />
      </div>
      <div>
        <span>Switch to dark mode</span> <Toggle />
      </div>
    </SettingsModalStyled>
  );
}

export default SettingsModal;
