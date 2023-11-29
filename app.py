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
            cursor.execute("SELECT * FROM produto")
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
        cursor.execute("SELECT * FROM produto")
        prt = cursor.fetchall()
        return render_template('/tela_livros.html', produto=prt)

@app.route('/categoria', methods=['POST']) # NAO ESTA COMPLETO
def categoria():
        cursor.execute("SELECT * FROM produto")
        prt = cursor.fetchall()
        return render_template('/categoria.html', produto=prt)


@app.route('/simulate_compra')
def simulate_compra():
    titulo = request.form['titulo']
    valor = request.form['valor']
    cursor.execute("SELECT * FROM produto WHERE pr_preco = %s, pr_titulo = %s", (valor,titulo))
    prt = cursor.fetchall()
    return render_template('toggle-menu', produto=prt) # TA ERRADO

@app.route('/simulate_det', methods=['POST'])
def simulate_det():
    titulo = request.form['titulo']
    cursor.execute("SELECT * FROM produto WHERE pr_titulo = %s", (titulo,))
    prt = cursor.fetchall()
    return render_template('detalhar.html', produto=prt)

# # Rota para a página de detalhes do produto
# @app.route('/detalhar/<int:pr_id>')
# def detalhar(pr_id):
#     # Recupera os detalhes do produto do banco de dados
#     cursor.execute("SELECT * FROM produto WHERE pr_id = %s", (pr_id,))
#     produto = cursor.fetchone()
#     return render_template('detalhar.html', produto=produto)

if __name__ == '__main__':
    app.run(debug=True)

