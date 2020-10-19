import { css } from "emotion/macro";

export default (): Record<string, string> => {
  return {
    container: css`
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      margin-top: 10px;
    `,
  };
};
