import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ maxWidth: '147px', color: '#00CC22'// стили для слайдера // пишет студент
                
            }}
            aria-labelledby="non-linear-slider"

            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
