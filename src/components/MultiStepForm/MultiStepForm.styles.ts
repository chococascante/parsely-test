import { css } from "emotion/macro";
import { useTheme } from "@material-ui/core/styles";

export default (): Record<string, string> => {
  return {
    container: css`
      display: flex;
      height: 500px;
      width: 700px;
      padding: 25px;
      flex-direction: column;
    `,
  };
};
