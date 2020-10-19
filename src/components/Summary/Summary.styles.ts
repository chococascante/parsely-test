import { css } from "emotion/macro";

export default (): Record<string, string> => {
  return {
    container: css`
      width: 100%;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      overflow-y: scroll;
      padding: 25px;
      max-height: 90%;
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
    list: css`
      width: 100%;
      min-height: 50px;
      background-color: #f5f5f5;
    `,
    flexColumn: css`
      display: flex;
      flex-direction: column;
    `,
    label: css`
      font-weight: bold;
    `,
    entry: css`
      margin: 5px 0;
    `,
  };
};
