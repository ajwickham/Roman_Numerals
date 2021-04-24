import Translate from './../src/data';

describe('Roman to Arabic', () => {

  test('should correctly create a translate object from inputNumber', () => {
    const translation = new Translate(2);
    expect(translation.inputNumber).toEqual(2);
  });
    test('should correctly return "" for input 0', () => {
    const translation = new Translate(0);
    expect(translation.translateArabic()).toEqual("");
  });
  test('should correctly return I for input 1', () => {
    const translation = new Translate(1);
    expect(translation.translateArabic()).toEqual("I");
  });
  test('should correctly return II for input 2', () => {
    const translation = new Translate(2);
    expect(translation.translateArabic()).toEqual("II");
  });
  test('should correctly return III for input 3', () => {
    const translation = new Translate(3);
    expect(translation.translateArabic()).toEqual("III");
  });
    test('should correctly return V for input 5', () => {
    const translation = new Translate(5);
    expect(translation.translateArabic()).toEqual("V");
  });
  test('should correctly return the last numerals after V for input 6', () => {
    const translation = new Translate(6);
    expect(translation.translateArabic()).toEqual("VI");
  });
  test('should correctly return the I before V for input 4', () => {
    const translation = new Translate(4);
    expect(translation.translateArabic()).toEqual("IV");
  });
  test('should correctly return the I before X for input 9', () => {
    const translation = new Translate(9);
    expect(translation.translateArabic()).toEqual("IX");
  });
  test('should correctly return X for input 10', () => {
    const translation = new Translate(10);
    expect(translation.translateArabic()).toEqual("X");
  });
  test('should correctly return XI for input 11', () => {
    const translation = new Translate(11);
    expect(translation.translateArabic()).toEqual("XI");
  });
  test('should correctly return XII for input 12', () => {
    const translation = new Translate(12);
    expect(translation.translateArabic()).toEqual("XII");
  });
  test('should correctly return XIV for input 14', () => {
    const translation = new Translate(14);
    expect(translation.translateArabic()).toEqual("XIV");
  });
  test('should correctly return XV for input 15', () => {
    const translation = new Translate(15);
    expect(translation.translateArabic()).toEqual("XV");
  });
  test('should correctly return XVIII for input 18', () => {
    const translation = new Translate(18);
    expect(translation.translateArabic()).toEqual("XVIII");
  });
  test('should correctly return XIX for input 19', () => {
    const translation = new Translate(19);
    expect(translation.translateArabic()).toEqual("XIX");
  });
  test('should correctly return L for input 50', () => {
    const translation = new Translate(50);
    expect(translation.translateArabic()).toEqual("L");
  });
  test('should correctly return XL for input 40', () => {
    const translation = new Translate(40);
    expect(translation.translateArabic()).toEqual("XL");
  });
  test('should correctly return C for input 100', () => {
    const translation = new Translate(100);
    expect(translation.translateArabic()).toEqual("C");
  });
  test('should correctly return XC for input 90', () => {
    const translation = new Translate(90);
    expect(translation.translateArabic()).toEqual("XC");
  });
  test('should correctly return CC for input 200', () => {
    const translation = new Translate(200);
    expect(translation.translateArabic()).toEqual("CC");
  });
  test('should correctly return V̅ for input 5000', () => {
    const translation = new Translate(5000);
    expect(translation.translateArabic()).toEqual("V̅");
  });
  test('should correctly return CD for input 400', () => {
    const translation = new Translate(400);
    expect(translation.translateArabic()).toEqual("CD");
  });

  test('should correctly return MV̅DCXXVII for input 4627', () => {
    const translation = new Translate(4627);
    expect(translation.translateArabic()).toEqual("MV̅DCXXVII");
  });
  test('should correctly return X̅ for input 10,000', () => {
    const translation = new Translate(10000);
    expect(translation.translateArabic()).toEqual("X̅");
  });
  test('should correctly return MX̅ for input 9,000', () => {
    const translation = new Translate(9000);
    expect(translation.translateArabic()).toEqual("MX̅");
  });
  test('should correctly return M̅M̅M̅["I","V","X","L","C","D","M","V̅","X̅","L̅","C̅","D̅","M̅"MV̅DCXXVII for input 3,769,329', () => {
    const translation = new Translate(3769329);
    expect(translation.translateArabic()).toEqual("M̅M̅M̅D̅C̅C̅L̅X̅MX̅CCCXXIX");
  });
  test('should correctly return 1 for input I', () => {
    const translation = new Translate("I");
    expect(translation.translateRoman()).toEqual(1);
  });
  test('should correctly return 2 for input II', () => {
    const translation = new Translate("II");
    expect(translation.translateRoman()).toEqual(2);
  });
})

describe('Arabic to Roman', () => {
    test('should correctly return 1 for input I', () => {
        const translation = new Translate("I");
        expect(translation.translateRoman()).toEqual(1);
        });
        test('should correctly return 2 for input II', () => {
        const translation = new Translate("II");
        expect(translation.translateRoman()).toEqual(2);
        });
})