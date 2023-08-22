import { ButtonClick } from "components/App.styled"
import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>            
            {options.map(name => 
                <ButtonClick key={name} name={name} onClick={onLeaveFeedback}>{name}</ButtonClick>
            )}
            
        </div>

    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

