import { useCallback, useState } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import styled from "styled-components";

const StyledButton = styled.button`
  margin-left: 10px;
`;
function ProgressBarList({
  progressBars,
}: {
  progressBars: { name: string; defaultValue: number }[];
}) {
  const [selectedProgressBar, setSelectedProgressBar] = useState<number>(0);
  const [progressValues, setProgressValues] = useState<number[]>(
    progressBars.map((item) => item.defaultValue)
  );

  const changeProgressBarValue = useCallback(
    (progressIndex: number, changeValue: number) => () => {
      setProgressValues((prevState: number[]) => {
        const newState: number[] = ([] as number[]).concat(prevState);
        newState[progressIndex] += changeValue;
        if (newState[progressIndex] < 0) newState[progressIndex] = 0;

        return newState;
      });
    },
    []
  );
  const stepValues = [-25, -10, 10, 25];

  return (
    <>
      {progressBars.map((ps, index) => (
        <div className="progressbar">
          <ProgressBar progress={progressValues[index]} />
        </div>
      ))}
      <div>
        <select
          value={selectedProgressBar}
          onChange={(e) => setSelectedProgressBar(+e.target.value)}
        >
          {progressBars.map((ps, index) => (
            <option value={index}> {ps.name} </option>
          ))}
        </select>
        {stepValues.map((stepValue) => (
          <StyledButton
            onClick={changeProgressBarValue(selectedProgressBar, stepValue)}
          >
            {stepValue}
          </StyledButton>
        ))}
      </div>
    </>
  );
}

export default ProgressBarList;
