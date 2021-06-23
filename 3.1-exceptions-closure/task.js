//! Задача №1
function parseCount(value) {
  if (!Number.parseInt(value)) {
    const parsError = new Error("Невалидное значение");
    throw parsError;
  }
  return Number.parseInt(value);
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error
  }
}
