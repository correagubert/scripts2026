import cv2

camera = cv2.VideoCapture(0)
if not camera.isOpened():
    print("Não foi possível acessar a câmera.")
else:
    while True:
        # Definir parâmetros do recorte
        ret, frame = camera.read()
        if not ret:
            print("Não foi possível capturar o frame.")
            break
        
        cv2.imshow("Pressione S para capturar | Pressione Q para sair", frame)
        
        press = cv2.waitKey(1) & 0xFF
        if press == ord('s'):
            # Salva original / Mostrar recorte
            screenshot = frame.copy()
            screenshot_filename = input("Nome do arquivo: ")
            cropField = cv2.selectROI("Pressione S para capturar | Pressione Q para sair", frame, showCrosshair=True, fromCenter=False)
            v1 = int(cropField[0])
            v2 = int(cropField[1])
            v3 = int(cropField[2])
            v4 = int(cropField[3])
            crop = frame[v2:v2+v4, v1:v1+v3]
            cv2.imwrite(f"{screenshot_filename}.jpg", screenshot)
            print(f"Foto salva com sucesso em: {screenshot_filename}.jpg")
            cv2.imwrite(f"{screenshot_filename}_cropped.jpg", crop)
            print(f"Recorte salvo com sucesso em: {screenshot_filename}_cropped.jpg")
        elif press == ord('q'):
            break

camera.release()
cv2.destroyAllWindows()