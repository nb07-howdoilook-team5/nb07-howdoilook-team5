import { InternalServerError } from "../error/errors";

// - 스타일 구성의 종류에는 **상의, 하의, 아우터, 원피스, 신발, 가방, 패션잡화**가 있으며, 각 구성마다 의상명, 브랜드명, 가격을 입력할 수 있습니다.
export class StyleComponent {
  constructor(clothName, brandName, price) {
    this.clothName = clothName;
    this.brandName = brandName;
    this.price = price;
  }

  static fromEntity({ clothName, brandName, price, category }) {
    switch (category) {
      case STYLE_TOP:
        new Top(clothName, brandName, price);
        break;
      case STYLE_BOTTOM:
        new Bottom(clothName, brandName, price);
        break;
      case STYLE_OUTER:
        new Outer(clothName, brandName, price);
        break;
      case STYLE_DRESS:
        new Dress(clothName, brandName, price);
        break;
      case STYLE_SHOES:
        new Shoes(clothName, brandName, price);
        break;
      case STYLE_BAG:
        new Bag(clothName, brandName, price);
        break;
      case STYLE_ACCESSORY:
        new Accessory(clothName, brandName, price);
        break;
      default:
        throw new InternalServerError(`Invalid category: ${category}`);
    }
  }
}

export class Top extends StyleComponent {
  constructor(clothName, brandName, price) {
    super(clothName, brandName, price);
  }
}

export class Bottom extends StyleComponent {
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

export class Accessory extends StyleComponent {
  constructor(clothName, brandName, price) {
    super(clothName, brandName, price);
  }
}
const STYLE_TOP = "top";
const STYLE_BOTTOM = "bottom";
const STYLE_OUTER = "outer";
const STYLE_DRESS = "dress";
const STYLE_SHOES = "shoes";
const STYLE_BAG = "bag";
const STYLE_ACCESSORY = "accessory";
