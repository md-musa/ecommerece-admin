import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://ecommerce50.herokuapp.com/api',

  //   timeout: 1000,
  headers: {
    authorization:
      'Bearer ' +
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmIwYmNiODdkODgxODAwMTY0NDMxZmUiLCJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6Im1vaGFtbWFkLm11c2E3MDZAZ21haWwuY29tIiwiaWF0IjoxNjU1NzUwNTMzfQ.MpnrNDPTILnJRuN61GxCv9S8-KtPzAippo5DZ2o9SFM',
  },
});
