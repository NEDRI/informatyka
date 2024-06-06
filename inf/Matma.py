import math

def dystans(S1x,S1y,S2x,S2y):
    return math.sqrt((S1x - S2x) ** 2 + (S1y - S2y) ** 2)

def promien(Ax, Ay, Bx, By, Sx, Sy):
    return math.sqrt((Ax - Sx) ** 2 + (Ay - Sy) ** 2)

def srodek(Ax, Ay, Bx, By):
    return (Ax + Bx) / 2, (Ay + By) / 2

def polozenie(d, R, r):
    if d == R + r:
        return "Styczne zewnetrznie"
    elif d == abs(R - r):
        return "Styczne wewnetrznie"
    elif abs(R - r) < d < R + r:
        return "Przecinajace sie"
    elif d > R + r:
        return "Rozlaczne"
    elif d < abs(R - r):
        return "Jeden okrag wewnątrz drugiego"

#k1
a = (-2,1)
b = (4,1)
#k2
c = (3,2)
d = (1,4)

centrumKola1 = srodek(*a,*b)
centrumKola2 = srodek(*c,*d)

promien1 = promien(*a,*b,*centrumKola1)
promien2 = promien(*c,*d,*centrumKola2)

print("K1:", centrumKola1, "R:" , promien1)
print("K2:", centrumKola2,"R:" , promien2)

print("Dystans: ",dystans(*centrumKola1,*centrumKola2))

print(polozenie(dystans(*centrumKola1,*centrumKola2),promien1,promien2))
