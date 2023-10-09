#https://github.com/PiskorowskiJakub/programming-course-cpp/blob/main/2-algorytmika/2-2-podstawowe-algorytmy/2-2-05-potegowanie-szybkie/README.md

def szybkie_potegowanie(a, n):
    w = 1
    while n > 0:
        if n % 2 == 1:
            w *= a
        a *= a
        n //= 2
    return w

a = int(input("Podaj podstawę: "))
n = int(input("Podaj wykładnik: "))

wynik = szybkie_potegowanie(a, n)
print(f"{a} do potęgi {n} wynosi: {wynik}")

