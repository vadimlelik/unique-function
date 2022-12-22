export const priceRu = (price) =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat(" ₽");
// console.log(priceRu(10000));

export const declension = (form, value) => {
  const cases = [2, 0, 1, 1, 1, 2];

  return form[
    value % 100 > 4 && value % 100 < 20
      ? 2
      : cases[value % 10 < 5 ? value % 10 : 5]
  ];
};

console.log(declension(["день", "дня", "дней"], 11));

// declension([ 'час', 'часа', 'часов' ], hours),
// declension([ 'минута', 'минуты', 'минут' ], minutes),
// declension([ 'секунда', 'секунды', 'секунд' ], seconds);
