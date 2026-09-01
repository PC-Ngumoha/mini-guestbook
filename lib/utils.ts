export function howLongAgo(date: Date | string): string {
  const SECONDS_IN_YEAR = 31_536_000;
  const SECONDS_IN_MONTH = 2_592_000;
  const SECONDS_IN_DAY = 86_400;
  const SECONDS_IN_HOUR = 3_600;
  const SECONDS_IN_MINUTE = 60;

  const targetDate =
    date instanceof Date
      ? new Date(date.toISOString()).getTime()
      : new Date(date).getTime();
  const todayDate = new Date().getTime();
  const seconds = Math.floor((todayDate - targetDate) / 1000);

  let interval = Math.floor(seconds / SECONDS_IN_YEAR);
  if (interval >= 1) return `${interval} year${interval > 1 ? "s" : ""} ago.`;

  interval = Math.floor(seconds / SECONDS_IN_MONTH);
  if (interval >= 1) return `${interval} month${interval > 1 ? "s" : ""} ago.`;

  interval = Math.floor(seconds / SECONDS_IN_DAY);
  if (interval >= 1) return `${interval} day${interval > 1 ? "s" : ""} ago.`;

  interval = Math.floor(seconds / SECONDS_IN_HOUR);
  // console.log("Interval: ", interval);
  if (interval >= 1) return `${interval} hour${interval > 1 ? "s" : ""} ago.`;

  interval = Math.floor(seconds / SECONDS_IN_MINUTE);
  // console.log("Seconds: ", seconds, ", Interval: ", interval);
  if (interval >= 1) return `${interval} minute${interval > 1 ? "s" : ""} ago.`;

  return "Just now.";
}
