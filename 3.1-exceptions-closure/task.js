//! Задача №1
function parseCount(value) {
  if (!Number.parseInt(value)) {
    throw new Error("Невалидное значение");
  }
  return Number.parseInt(value);
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

//! Задача №2

class Triangle {
  constructor(a, b, c) {
    if (this.validate(a, b, c)) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  validate(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      return true;
    }
  }

  getPerimeter() {
    const perimetr = this.a + this.b + this.c;
    return perimetr;
  }

  getArea() {
    const p = this.getPerimeter() / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(s * 1000) / 1000;
  }
}
function getTriangle(a, b, c) {
    const messadge =  "Ошибка! Треугольник не существует";
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      getArea() {
        return messadge
      },
      getPerimeter() {
        return messadge
      },
    };
  }
}
