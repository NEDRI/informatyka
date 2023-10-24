#https://github.com/PiskorowskiJakub/programming-course-cpp/blob/main/2-algorytmika/2-7-algorytmy-iteracyjne/2-7-01-rozklad-liczb/README.md
def rozklad(n):
    k = 2
    czyniki = []
    while n > 1:
        while n & k == 0:
            czyniki.append(k)
            n = n / k
        k = k + 1
    print(czyniki)
n = int(input("Podaj liczbe: "))
