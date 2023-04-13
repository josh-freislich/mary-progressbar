import React from "react";
import { render, screen } from "@testing-library/react";
import ProgressBarList from "./ProgressBarList";

test("renders Progress Bars", () => {
  const { container } = render(
    <ProgressBarList
      progressBars={[
        { name: "Progress1", defaultValue: 50 },
        { name: "Progress2", defaultValue: 80 },
      ]}
    />
  );
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const progressBar = container.getElementsByClassName("progressbar");
  expect(progressBar).toHaveLength(2);
});
