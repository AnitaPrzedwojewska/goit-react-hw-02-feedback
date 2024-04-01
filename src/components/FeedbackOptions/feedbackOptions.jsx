import { Button } from "./feedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div>
        {options.map(option => (
          <Button
            type="button"
            key={option}
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </Button>
        ))}
      </div>
    </>
  );
};
