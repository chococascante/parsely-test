import { css } from "emotion/macro";

export default (): Record<string, string> => {
  return {
    container: css`
      display: flex;
      width: 700px;
      padding: 25px;
      flex-direction: column;
      align-items: center;
      max-height: 100%;
    `,
  };
};
