const express = require('express');
const cron = require('node-cron');

const server = express();
const PORT = 8000;

server.listen(PORT, console.log(`server listening on port ${PORT}`));

/**
 * see crontab.guru to see how time schedule is calculated
 * timezone can be specified to prevent miss schedule calulations if server is running on a different machine with different time zone
 */

//   ┌────────────── second (optional)
//   │ ┌──────────── minute
//   │ │ ┌────────── hour
//   │ │ │ ┌──────── day of month
//   │ │ │ │ ┌────── month
//   │ │ │ │ │ ┌──── day of week
//   │ │ │ │ │ │
//   │ │ │ │ │ │
//   * * * * * *

cron.schedule('47 7 * * *', () => {
  let startTime = new Date();
  console.log(`running a task : ${startTime.toString()}}`);
  setTimeout(() => {
    let ellapsedTime = new Date() - startTime;
    console.log(`Finished a task : ${Date().toString()}`);
    console.log(`Took ${ellapsedTime / 1000} seconds to complete`);
  }, 500);
},{
    scheduled: true,
    timezone: "Asia/Kuala_Lumpur"
});

/**
 * the task will be executed everyday at 7:47 am (GMT+8) automatically without hitting any routes
 */


