export const fetchExercises = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    return {
      errorMsg: `The following error has occurred: ${err}`,
    };
  }
}