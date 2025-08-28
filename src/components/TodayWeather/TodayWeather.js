// import { Grid } from '@mui/material';
// import React from 'react';
// import AirConditions from './AirConditions/AirConditions';
// import DailyForecast from './Forecast/DailyForecast';
// import Details from './Details/Details';

// const TodayWeather = ({ data, forecastList }) => {
//   return (
//     <Grid container sx={{ padding: '3rem 0rem 0rem' }}>
//       <Details data={data} />
//       <AirConditions data={data} />
//       <DailyForecast data={data} forecastList={forecastList} />
//     </Grid>
//   );
// };

// export default TodayWeather;


// import { Grid } from '@mui/material';
// import React from 'react';
// import AirConditions from './AirConditions/AirConditions';
// import DailyForecast from './Forecast/DailyForecast';
// import Details from './Details/Details';

// const TodayWeather = ({ data, forecastList }) => {
//   return (
//     <Grid container spacing={3} sx={{ padding: '3rem 0rem 0rem' }}>
      
//       {/* First row: Details (left) + AirConditions (right) */}
//       <Grid item xs={12} md={6}>
//         <Details data={data} />
//       </Grid>

//       <Grid item xs={12} md={6}>
//         <AirConditions data={data} />
//       </Grid>

//       {/* Second row: Daily Forecast full width */}
//       <Grid item xs={12}>
//         <DailyForecast data={data} forecastList={forecastList} />
//       </Grid>
//     </Grid>
//   );
// };

// export default TodayWeather;
import { Grid, Card, Box } from '@mui/material';
import React from 'react';
import AirConditions from './AirConditions/AirConditions';
import DailyForecast from './Forecast/DailyForecast';
import Details from './Details/Details';

const TodayWeather = ({ data, forecastList }) => {
  return (
    <Grid container spacing={3} sx={{ padding: '3rem 0rem 0rem' }}>
      
      {/* One row with Details + AirConditions inside one card */}
      <Grid item xs={12}>
        <Card
          sx={{
            background: 'linear-gradient(135deg, #003973 0%, #0072ff 100%)',
            borderRadius: '20px',
            color: '#fff',
            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem',
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Details data={data} />
          </Box>

          <Box sx={{ flex: 1, borderLeft: '1px solid rgba(255,255,255,0.2)', pl: 3 }}>
            <AirConditions data={data} />
          </Box>
        </Card>
      </Grid>

      {/* Second row: Daily Forecast full width */}
      <Grid item xs={12}>
        <DailyForecast data={data} forecastList={forecastList} />
      </Grid>
    </Grid>
  );
};

export default TodayWeather;
