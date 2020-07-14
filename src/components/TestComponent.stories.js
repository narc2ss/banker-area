import React from "react";
import TestComponent from "./TestComponent";

export default {
  component: TestComponent,
  title: "TestComponent",
};

export const testComponent = () => <TestComponent name="Storybook" />;

testComponent.stroy = {
  name: "Default",
};
