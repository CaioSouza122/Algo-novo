from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
import os #Importando a Biblioteca os para Manipulação de Arquivos e Diretórios
import uuid #Importando a Biblioteca uuid para Gerar Identificadores Únicos para os Arquivos Anexados  
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html') # Renderizando o Template HTML para a Página Inicial

@app.route('/submit', methods=['POST']) #Criando Rota para Receber os Dados do Formulário (POST) e Processar o Envio do Chamado
def submit():
    nome = request.form['name']
    email = request.form['email']
    problema = request.form['issue']
    
    anexo = request.files.get('attachment') #Obtendo o arquivo enviado pelo usuário
    
    if anexo and anexo.filename != '':
        nome_arquivo = secure_filename(anexo.filename) #Garantindo que o nome do arquivo seja seguro
        caminho_arquivo = os.path.join('uploads', nome_arquivo) #Definindo o caminho para salvar o arquivo
        anexo.save(caminho_arquivo) #Salvando o arquivo no servidor
    
    return render_template('sucesso.html', nome=nome, email=email, problema=problema) #Renderizando a Página de Sucesso e Passando os Dados do Formulário para Exibição

if __name__ == '__main__':
    app.run(debug=True)

   