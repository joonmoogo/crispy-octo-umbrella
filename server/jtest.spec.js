import simplefunction from "./jTest";

describe('테스트1', () => {
    const a = 1, b = 2;

    test('a + b는 3이다', () => {
        expect(a + b).toEqual(3);
    });
});

describe('테스트2', () => {
    test('simplefunction의 리턴 값 테스트', () => {
        expect(simplefunction()).toEqual(false);
        expect(simplefunction(1)).toEqual(true);
    })
})
