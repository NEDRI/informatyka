#https://github.com/PiskorowskiJakub/programming-course-cpp/blob/main/2-algorytmika/2-7-algorytmy-iteracyjne/2-7-04-calkowanie-numeryczne/README.md
def f(x):
    return x * x + x + 2 
def oblicznie_pola(a,b,n):
    x =(b-a)/n
    s = 0
    srodek =  a+(b-a) / (2*n)
    for i in range (n):
        s = s + f(srodek)
        srodek = srodek + x
    return s * x

print ("Podaj przedzial [a, b] ")
a = int(input("podaj a: "))
b = int(input("podaj b: "))
n = int(input("podaj liczbe trapezow: "))
pole = oblicznie_pola(a,b,n)
print("pole figury wynosi: ", pole )

