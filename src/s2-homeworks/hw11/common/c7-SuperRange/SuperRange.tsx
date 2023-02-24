import React from 'react'
import {alpha, Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ maxWidth: '147px',
                color: '#00CC22',
                '& .MuiSlider-rail': {backgroundColor: '#8B8B8B'},
                '& .MuiSlider-thumb': {
                    height: 24,
                    width: 24,
                    backgroundColor: '#fff',
                    border: '2px solid currentColor',
                    '&:after': {
                        width: '10px',
                        height: '10px',
                        display: 'block',
                        background: '#00CC22',
                        borderRadius: '50%',
                    },

            }}}
            aria-labelledby="non-linear-slider"
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
