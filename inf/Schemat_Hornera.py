def horner(wsp, st, x):
    if st == 0:
        return wsp[0]
    return x * horner(wsp, st - 1, x) + wsp[st]

def main():
    stopien = int(input("Podaj stopien wielomianu: "))
    wspolczynniki = []

    for i in range(stopien + 1):
        wspolczynnik = int(input(f"Podaj wspolczynnik stojacy przy potedze {stopien - i}: "))
        wspolczynniki.append(wspolczynnik)

    argument = int(input("Podaj argument: "))
    wynik = horner(wspolczynniki, stopien, argument)

    print(f"W({argument}) = {wynik}")
    
    del wspolczynniki

if __name__ == "__main__":
    main()
