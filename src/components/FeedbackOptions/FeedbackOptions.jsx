import { ButtonClick } from "components/App.styled"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>            
            {options.map(name => 
                <ButtonClick key={name} name={name} onClick={onLeaveFeedback}>{name}</ButtonClick>
            )}
            
        </div>

    )
}
