from flask import Flask, request, render_template
import mysql.connector

app = Flask(__name__)

# Configuração do banco de dados
db = mysql.connector.connect(
    host="localhost",
    user="gatinho_galactico",
    passwd="",
    database="livraria"
)
cursor = db.cursor()

@app.route('/')
def index():
    # Obtém os registros do banco de dados
    cursor.execute("SELECT * FROM usuario")
    data = cursor.fetchall()
    return render_template('teste_mt.html', data=data)

@app.route('/add', methods=['POST'])
def add():
    if request.method == 'POST':
        nome = request.form['nome']
        # Insere um novo registro no banco de dados
        cursor.execute("INSERT INTO tabela (nome) VALUES (%s)", (nome,))
        db.commit()
    return redirect('/')

@app.route('/update', methods=['POST'])
def update():
    if request.method == 'POST':
        id = request.form['id']
        novo_nome = request.form['novo_nome']
        # Atualiza o registro no banco de dados
        cursor.execute("UPDATE tabela SET nome = %s WHERE id = %s", (novo_nome, id))
        db.commit()
    return redirect('/')

@app.route('/delete/<string:id>', methods=['GET'])
def delete(id):
    # Deleta o registro do banco de dados
    cursor.execute("DELETE FROM tabela WHERE id = %s", (id,))
    db.commit()
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)





# from flask import Flask, render_template

# app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template('index.html')

# if __name__ == '__main__':
#     app.run(debug=True)