import { css } from "emotion/macro";

export default (): Record<string, string> => {
  return {
    container: css`
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px 0;
    `,
  };
};
