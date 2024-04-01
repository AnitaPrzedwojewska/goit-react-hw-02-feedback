import { OptionsList, Option, Button } from './feedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <OptionsList>
        {options.map(option => (
          <Option key={option}>
            <Button type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </Button>
          </Option>
        ))}
      </OptionsList>
    </>
  );
};
