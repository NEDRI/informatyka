import flet as ft

def main(page: ft.Page):
    
#Ustawienia ekranu
    page.window_width = 350       
    page.window_height = 820 #700      
    #page.window_resizable = False  
    page.update()

#Naglowek i elementy
    page.title = "appdom"
    
   

#Aplikacja

    def swiatlo_menu():
        print("1")
        page.update()

    page.add(
        ft.Column(
            [
                ft.Container(
                    alignment=ft.alignment.center,
                    bgcolor=ft.colors.GREEN,
                    width=350,
                    height=770,
                    border_radius=10,
                ),
            ],
            horizontal_alignment=ft.CrossAxisAlignment.CENTER,
        ),
    )
ft.app(target=main)