export function random_text() {
  const random_text = "";
  const randomNameGenerator = (random_text) => {
    let res = "";
    for (let i = 0; i < random_text; i++) {
      const random = Math.floor(Math.random() * 27);
      res += String.fromCharCode(97 + random);
    }
    return res;
  };
}
export default random_text;
