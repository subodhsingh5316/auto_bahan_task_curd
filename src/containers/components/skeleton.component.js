import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function SkeletonComponent() {
  return list.map((each) => (
    <Grid item xs={10} sm={5} md={3} key={each}>
      <Skeleton width={'100%'} height={50} />
      <Skeleton width={'100%'} height={'250px'} />
    </Grid>
  ));
}
