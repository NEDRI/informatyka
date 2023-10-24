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
