export const capitalizeFirstChar = (inputString: string) =>
  inputString.charAt(0).toUpperCase() + inputString.slice(1);

export const removeDash = (inputString: string) =>
  inputString.replaceAll('-', ' ');

export const getTimeBasedEmojiAndTitle = () => {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
    return 'Good morning 🌞';
  } else if (hour >= 12 && hour < 17) {
    return 'Good afternoon ⛅︎';
  } else if (hour >= 17 && hour < 21) {
    return 'Good evening 🌆';
  } else {
    return 'Good night 🌙';
  }
};
