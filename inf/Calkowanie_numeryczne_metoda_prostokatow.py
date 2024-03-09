def f(x):
    return x * x + x + 2

def całkowanie(a, b, n):
    x = (b - a) / n
    S = 0
    srodek = a + (b - a) / (2 * n)
    
    for i in range(n):
        S += f(srodek)
        srodek += x
        
    return S * x

a = float(input("Podaj przedział [a, b] \n a = "))
b = float(input("b = "))
n = int(input("Podaj liczbę prostokątów: "))

pole = całkowanie(a, b, n)
print("Pole figury wynosi:", pole)
