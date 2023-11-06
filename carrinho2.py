from flask import Flask, request, render_template
import mysql

app = Flask(__name__)

db = mysql.connector.connect(host="localhost", user="root", password="", database="livraria")
cursor = db.cursor()