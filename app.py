from flask import Flask, request, render_template, redirect
import mysql.connector

app = Flask(__name__)

# Configuração do banco de dados
db = mysql.connector.connect(host="localhost", user="root", password="", database="livraria")
cursor = db.cursor()


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        senha = request.form['senha']
        # Verifica as credenciais no banco de dados
        cursor.execute("SELECT * FROM usuario WHERE email=%s AND senha=%s", (email, senha))
        data = cursor.fetchall()
        if data:
            # Credenciais válidas, redireciona para a página desejada (por exemplo, tela_livros.html)
            return redirect('./tela_livros.html')
        else:
            # Credenciais inválidas, redireciona de volta para a página de login
            return redirect('/')
            
@app.route('/app_livraria/add', methods=['POST'])
def add():
    if request.method == 'POST':
        email = request.form['email']
        senha = request.form['senha'] 
        # Insere um novo registro no banco de dados
        cursor.execute("INSERT INTO usuario (email, senha) VALUES (%s, %s)", (email, senha))
        db.commit()
    return redirect('/')

# Descomente as rotas abaixo se precisar de funcionalidades de atualização e exclusão

# @app.route('/update', methods=['POST'])
# def update():
#     if request.method == 'POST':
#         id = request.form['id']
#         novo_nome = request.form['novo_nome']
#         # Atualiza o registro no banco de dados
#         cursor.execute("UPDATE tabela SET nome = %s WHERE id = %s", (novo_nome, id))
#         db.commit()
#     return redirect('/')

# @app.route('/delete/<string:id>', methods=['GET'])
# def delete(id):
#     # Deleta o registro do banco de dados
#     cursor.execute("DELETE FROM tabela WHERE id = %s", (id,))
#     db.commit()
#     return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
