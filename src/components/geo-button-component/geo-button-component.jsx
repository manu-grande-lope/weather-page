import geoLogo from './geo-logo.png';
import Button from '@mui/material/Button';

export default function GeoButton(props) {



    return (
        <Button
        onClick={props.onSelectGeo}
        style={
            {
                maxWidth: '36px',
                maxHeight: '36px',
                minWidth: '36px',
                minHeight: '36px',
                borderRadius: 0,
                
            }}
            sx={
                {
                    border: 2,
                    backgroundColor:'primary.accent',
                    "&:hover": {backgroundColor: 'primary.accent'},
                    borderColor: 'primary.cardBG',
                    boxShadow: 4,
                    
                }}
             variant="contained"><img src={geoLogo} /></Button>
    )
}