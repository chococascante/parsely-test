import { useTheme } from "@material-ui/core";
import { css } from "emotion/macro";

export default (): Record<string, string> => {
  const theme = useTheme();
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
      justify-content: space-between;
      margin: 15px 0;
    `,
    flexItem: css`
      width: 45%;
    `,
    autoComplete: css`
      width: 500px;
    `,
    formControl: css`
      margin: 5px 5px;
    `,
    list: css`
      width: 100%;
      min-height: 50px;
      background-color: #f5f5f5;
    `,
  };
};
