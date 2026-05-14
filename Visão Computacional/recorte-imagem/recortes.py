from flask import Flask, render_template, request, jsonify
from werkzeug.utils import secure_filename
import cv2
import os

UPLOAD_FOLDER = 'uploads'
RECORTES_FOLDER = 'recortes'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(RECORTES_FOLDER, exist_ok=True)

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/enviar', methods=['POST'])
def enviar():
    nome = request.form.get('nome', '').strip()

    if not nome:
        return "Você não digitou nenhum nome."
    
    return f"Olá, {nome}! Seu nome foi recebido com sucesso."

@app.route('/upload', methods=['POST'])
def upload():
    if "imagem" not in request.files:
        return "Nenhuma imagem enviada."
    arquivo = request.files["imagem"]
    if arquivo.filename == "":
        return "Nenhuma imagem selecionada."
    nome_seguro = secure_filename(arquivo.filename)
    caminho_arquivo = os.path.join(UPLOAD_FOLDER, nome_seguro)
    arquivo.save(caminho_arquivo)
    return f"Upload da imagem '{nome_seguro}' realizado com sucesso."

@app.route('/recortar', methods=['POST'])
def recortar():
    try:
        if "imagem" not in request.files:
            return jsonify({"error": "Nenhuma imagem enviada"}), 400
        
        arquivo = request.files["imagem"]
        nome_saida = request.form.get('nome_saida', '').strip()
        x = int(request.form.get('x', '').strip())
        y = int(request.form.get('y', '').strip())
        w = int(request.form.get('w', '').strip())
        h = int(request.form.get('h', '').strip())
        
        if not nome_saida:
            return jsonify({"error": "O nome da imagem de saída é obrigatório."}), 400
        
        if w <= 0 or h <= 0:
            return jsonify({"error": "As coordenadas de recorte estão incorretas."}), 400

        nome_entrada_seguro = secure_filename(arquivo.filename)
        caminho_upload = os.path.join(UPLOAD_FOLDER, nome_entrada_seguro)
        arquivo.save(caminho_upload)
    
        img = cv2.imread(caminho_upload)
        if img is None:
            return jsonify({"error": "Não foi possível ler a imagem."}), 400
        altura_img, largura_img = img.shape[:2]

        if x < 0 or y < 0 or x + w > largura_img or y + h > altura_img:
            return jsonify({"error": "As coordenadas de recorte estão fora dos limites da imagem."}), 400
        
        recorte = img[y:y+h, x:x+w]

        nome_saida_seguro = secure_filename(nome_saida)
        if not nome_saida_seguro.lower().endswith(('.png', '.jpg', '.jpeg')):
            nome_saida_seguro += '.png'
        caminho_saida = os.path.join(RECORTES_FOLDER, nome_saida_seguro)
        sucesso =cv2.imwrite(caminho_saida, recorte)
        if not sucesso:
            return jsonify({"error": "Não foi possível salvar a imagem recortada."}), 500
        
        return jsonify({
            "mensagem": "Recorte realizado com sucesso!",
            "arquivo": caminho_saida
        })

    except ValueError:
        return jsonify({"error": "As coordenadas de recorte devem ser números inteiros."}), 400
    except Exception as e:
        return jsonify({"error": f"Ocorreu um erro: {str(e)}"}), 500


if __name__ == '__main__':
    app.run(debug=True)