import requests,shutil,time
import flet as ft

def main(page: ft.Page):

    page.title = "kamery"

#Ustawienia ekranu
    page.window_width = 670 #350       
    page.window_height = 780 #820   
    #page.window_resizable = False  
    page.update()
 
    img_url_kam1 = 'http://192.168.6.105:8080/cgi-bin/snapshot.sh?res=low&watermark=yes'
    path_kam1 = "C:\\Users\\andrz\\Pictures\\appkamera\\kamera1.jpg"
    r_kam1 = requests.get(img_url_kam1, stream=True)
    if r_kam1.status_code == 200:
        with open(path_kam1, 'wb') as f:
            r_kam1.raw.decode_content = True
            shutil.copyfileobj(r_kam1.raw, f)

    img_url_kam2 = 'http://192.168.6.101:8080/cgi-bin/snapshot.sh?res=low&watermark=yes'
    path_kam2 = "C:\\Users\\andrz\\Pictures\\appkamera\\kamera2.jpg"
    r_kam2 = requests.get(img_url_kam2, stream=True)
    if r_kam2.status_code == 200:
        with open(path_kam2, 'wb') as f:
            r_kam2.raw.decode_content = True
            shutil.copyfileobj(r_kam2.raw, f)

    kamera1=ft.Image(
                src=f"C:\\Users\\andrz\\Pictures\\appkamera\\kamera1.jpg",
                #width=300,
                #height=300,    
                )
    kamera2=ft.Image(
                src=f"C:\\Users\\andrz\\Pictures\\appkamera\\kamera2.jpg",
                #width=300,
                #height=300,    
                )

    page.add(kamera1,kamera2)

ft.app(target=main)