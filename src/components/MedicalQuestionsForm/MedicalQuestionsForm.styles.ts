import { css } from "emotion/macro";

export default (): Record<string, string> => {
  return {
    form: css`
      width: 100%;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      padding: 25px;
    `,
    flexRow: css`
      display: flex;
      width: 100%;
      margin: 15px 0;
    `,
    group: css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    `,
    flexItem: css`
      width: 45%;
    `,
    list: css`
      width: 100%;
    `,
  };
};
