import React from "react";
import ForecastItem from "./ForecastItem";
import { render } from "@testing-library/react";
test("ForecastItem render", async () => {
  const { findByText } = render(
    <ForecastItem
      weekDay={"Lunes"}
      hour={10}
      state={"clear"}
      temperature={23}
    />
  );

  const weekDay = await findByText(/lunes/i);
  const hour = await findByText(/10/);
  const temperature = await findByText(/23/);

  expect(weekDay).toHaveTextContent("Lunes");
  expect(hour).toHaveTextContent("10");
  expect(temperature).toHaveTextContent("23");
});
