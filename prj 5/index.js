const dateField = document.getElementById("date");
console.log(Date(dateField.value));
dateField.max = new Date().toISOString().split("T")[0]; //restricts date field to <= current date

function calculateAge() {
  let birthDate = new Date(dateField.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let currentDate = new Date();
  let d2 = currentDate.getDate();
  let m2 = currentDate.getMonth() + 1;
  let y2 = currentDate.getFullYear();

  console.log(d1, m1, y1);

  console.log(d2, m2, y2);

  let ageD, ageM, ageY;

  if (d2 < d1) {
    if ([1, 3, 5, 7, 8, 10, 12].includes(m2)) {
      ageD = d2 + 31 - d1;
    } else if ([4, 6, 9, 11].includes(m2)) {
      ageD = d2 + 30 - d1;
    } else {
      ageD = d2 + 28 - d1;
    }
    m2--;
  } else {
    ageD = d2 - d1;
  }

  if (m2 < m1) {
    ageM = m2 + 12 - m1;
    y2--;
  } else {
    ageM = m2 - m1;
  }

  ageY = y2 - y1;

  console.log(ageD, ageM, ageY);

  const resultField = document.getElementsByClassName("result")[0];
  resultField.innerHTML = `You are ${ageY} years, ${ageM} months and ${ageD} days old`
}
