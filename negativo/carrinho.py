# from flask import Flask, request, render_template, redirect
# import mysql.connector

# app = Flask(__name__)

# # Configuração do banco de dados
# db = mysql.connector.connect(host="localhost", user="root", password="", database="livraria")
# cursor = db.cursor()
# @app.route('/')

# @app.route('/')
# def index():
#     return render_template('tela_and.html') # , id="login"

# @app.route('/index.html', methods=['POST'])
# def login():
#     if request.method == 'POST':
#         email = request.form['email']
#         senha = request.form['senha']
#         # Verifica as credenciais no banco de dados
#         cursor.execute("SELECT * FROM usuario WHERE usu_email=%s AND usu_senha=%s", (email, senha))
#         data = cursor.fetchall()
#         if data:
#             # Credenciais válidas, redireciona para a página desejada (por exemplo, tela_livros.html)
#             return redirect('tela_livros.html')
#         else:
#             # Credenciais inválidas, redireciona de volta para a página de login
#             return redirect('/')
        
# @app.route('/tela_cad.html', methods=['POST'])
# def add():
#     if request.method == 'POST':
#         email = request.form['email']
#         senha = request.form['senha'] 
#         # Insere um novo registro no banco de dados
#         cursor.execute("INSERT INTO usuario (usu_email, usu_senha) VALUES (%s, %s)", (email, senha))
#         db.commit()
#     return redirect('/tela_livros.hmtl')

# if __name__ == '__main__':
#     app.run(debug=True)
