import { css } from "emotion/macro";
import { useTheme } from "@material-ui/core/styles";

export default (): Record<string, string> => {
  return {
    form: css`
      flex: 1;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    `,
  };
};
