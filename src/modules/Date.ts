export const getTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  return time;
};
