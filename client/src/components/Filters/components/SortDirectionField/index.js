import { Field } from 'react-final-form'
import { FormattedMessage } from "react-intl";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { SORT_DIRECTION } from '../../../../constants';

export const SortDirectionField = () => {
    return (
        <Field
            name="sortDirection"
            render={({ input }) => (
                <FormattedMessage id="filters.sort_direction">
                    {placeholder =>
                        <FormControl>
                            <FormLabel id="sort_direction">{placeholder}</FormLabel>
                            <RadioGroup
                                row
                                name="sort_directionp"
                                {...input}>
                                <FormControlLabel 
                                    value={SORT_DIRECTION.ASC} 
                                    control={<Radio />} 
                                    label={<FormattedMessage id="filters.sort_direction_options.asc"/>} />
                                <FormControlLabel 
                                    value={SORT_DIRECTION.DESC} 
                                    control={<Radio />} 
                                    label={<FormattedMessage id="filters.sort_direction_options.desc"/>} />
                            </RadioGroup>
                        </FormControl>
                    }
                </FormattedMessage>
            )}
        />
    )
}