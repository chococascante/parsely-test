import { css } from "emotion/macro";
import { useTheme } from "@material-ui/core/styles";

export default (): Record<string, string> => {
  const theme = useTheme();
  return {
    container: css`
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
  };
};
