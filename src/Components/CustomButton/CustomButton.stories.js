import CustomButton from "./CustomButton";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  component: CustomButton,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    href: "/about",
    children: "Scopri di più",
  },
};
