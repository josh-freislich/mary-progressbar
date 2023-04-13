import { ProgressBarStyled } from "./Styles";

function ProgressBar({ progress }: { progress: number }) {
  return <ProgressBarStyled progress={progress} />;
}

export default ProgressBar;
