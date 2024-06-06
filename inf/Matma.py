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
        return "Przecinajace sis"
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

ck1 = srodek(*a,*b)
ck2 = srodek(*c,*d)

print("K1:", ck1,promien(*a,*b,*ck1))
print("K2:", ck2,promien(*c,*d,*ck2))

print(dystans(*ck1,*ck2))

print(polozenie(dystans(*ck1,*ck2),promien(*a,*b,*ck1),promien(*c,*d,*ck2)))

