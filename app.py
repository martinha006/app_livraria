from flask import Flask, request, render_template, redirect
import mysql.connector

app = Flask(__name__)

# Configuração do banco de dados
db = mysql.connector.connect(host="localhost", user="root", password="", database="livraria")
cursor = db.cursor()

@app.route('/')
def home():
    return render_template('index.html')

# Rota para simular o clique no botão de login
@app.route('/simulate_login')
def simulate_login():
    return render_template('tela_login.html')

@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        senha = request.form['senha']
        # Verifica as credenciais no banco de dados
        cursor.execute("SELECT * FROM usuario WHERE usu_email=%s AND usu_senha=%s", (email, senha))
        data = cursor.fetchall()
        if data:
            # Credenciais válidas, redireciona para a página desejada (por exemplo, tela_livros.html)
            cursor.execute("SELECT * FROM produto WHERE pr_id=1")
            prt = cursor.fetchall()
            return render_template('/tela_livros.html', produto=prt)
        else:
            # Credenciais inválidas, redireciona de volta para a página de login
            return render_template('tela_login.html')

# Rota para simular o clique no botão de cadastro
@app.route('/simulate_add')
def simulate_add():
    return render_template('tela_cad.html')

@app.route('/add', methods=['POST'])
def add():
    if request.method == 'POST':
        email = request.form['email']
        senha = request.form['senha']
        cursor.execute("INSERT INTO usuario (usu_email, usu_senha) VALUES (%s, %s)", (email, senha))
        db.commit()
        cursor.execute("SELECT * FROM produto") # pr_id, pr_titulo, pr_preco WHERE pr_id=1
        prt = cursor.fetchall()
        return render_template('/tela_livros.html', produto=prt)


@app.route('/simulate_compra')
def simulate_compra():
    return render_template('../static/css/script.js')

@app.route('/simulate_det')
def simulate_det():
    return render_template('detalhar.html')

# # Rota para a página de detalhes do produto
# @app.route('/detalhar/<int:pr_id>')
# def detalhar(pr_id):
#     # Recupera os detalhes do produto do banco de dados
#     cursor.execute("SELECT * FROM produto WHERE pr_id = %s", (pr_id,))
#     produto = cursor.fetchone()
#     return render_template('detalhar.html', produto=produto)

if __name__ == '__main__':
    app.run(debug=True)

