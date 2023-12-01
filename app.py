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

@app.route('/simulate_compra')
def simulate_compra():
    titulo = request.form['titulo']
    valor = request.form['valor']
    cursor.execute("SELECT * FROM produto WHERE pr_preco = %s, pr_titulo = %s", (valor,titulo))
    prt = cursor.fetchall()
    return render_template('crrinho.html', produto=prt) # TA ERRADO

@app.route('/simulate_det', methods=['POST'])
def simulate_det():
    titulo = request.form['titulo']
    cursor.execute("SELECT * FROM produto WHERE pr_titulo = %s", (titulo,))
    prt = cursor.fetchall()
    return render_template('detalhar.html', produto=prt)

# MENU LATERAL
@app.route('/simulate_and')
def simulate_and():
    return render_template('tela_and.html')

@app.route('/simulate_categoria', methods=['POST'])
def simulate_categoria():
        cursor.execute("SELECT * FROM categoria")
        cat = cursor.fetchall()
        return render_template('/categoria.html', categoria=cat)

@app.route('/simulate_top3')
def simulate_top3():
    # Lógica para lidar com a rota do Top3 aqui
    return render_template('tela_and.html')

@app.route('/simulate_configuracoes')
def simulate_configuracoes():
    # Lógica para lidar com a rota de configurações aqui
    return render_template('tela_and.html')

if __name__ == '__main__':
    app.run(debug=True)

