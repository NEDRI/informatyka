def horner_scheme(wsp, st, x):
    if st == 0:
        return wsp[0]
    return x * horner_scheme(wsp, st - 1, x) + wsp[st]

def main():
    stopien = int(input("Podaj stopien wielomianu: "))
    wsp = [0] * (stopien + 1)
    
    for i in range(stopien + 1):
        wsp[i] = int(input(f"Podaj wspolczynnik stojacy przy potedze {stopien - i}: "))
    
    argument = int(input("Podaj argument: "))
    
    wynik = horner_scheme(wsp, stopien, argument)
    print(f"W({argument}) = {wynik}")

if __name__ == "__main__":
    main()
