import { css } from "emotion/macro";

export default (): Record<string, string> => {
  return {
    container: css`
      flex: 1;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      padding: 25px;
    `,
    flexRow: css`
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      margin: 15px 0;
    `,
    flexItem: css`
      width: 45%;
    `,
    content: css`
      margin-bottom: 50px;
    `,
    text: css`
      margin-top: 15px;
    `,
  };
};
