import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';


export const Loader = () => {
    return(
        <Box>
            <CircularProgress style={{color: 'rgba(81, 45, 228, 1)', height: '108px', width: '108px'}}/>
        </Box>
    )
}
