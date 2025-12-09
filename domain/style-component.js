// - 스타일 구성의 종류에는 **상의, 하의, 아우터, 원피스, 신발, 가방, 패션잡화**가 있으며, 각 구성마다 의상명, 브랜드명, 가격을 입력할 수 있습니다.
export class StyleComponent {
  constructor(clothName, brandName, price) {
    this.clothName = clothName;
    this.brandName = brandName;
    this.price = price;
  }
}

export class Top extends StyleComponent {
  constructor(clothName, brandName, price) {
    super(clothName, brandName, price);
  }
}

export class Pants extends StyleComponent {
  constructor(clothName, brandName, price) {
    super(clothName, brandName, price);
  }
}

export class Outer extends StyleComponent {
  constructor(clothName, brandName, price) {
    super(clothName, brandName, price);
  }
}

export class Dress extends StyleComponent {
  constructor(clothName, brandName, price) {
    super(clothName, brandName, price);
  }
}

export class Shoes extends StyleComponent {
  constructor(clothName, brandName, price) {
    super(clothName, brandName, price);
  }
}

export class Bag extends StyleComponent {
  constructor(clothName, brandName, price) {
    super(clothName, brandName, price);
  }
}

export class Accessories extends StyleComponent {
  constructor(clothName, brandName, price) {
    super(clothName, brandName, price);
  }
}
