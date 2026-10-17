from flask import Flask, render_template, request, redirect, url_for, flash
from system import Sistema

app = Flask(__name__)
app.secret_key =  "chavesecretasalao"

sistema = Sistema()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/cadastrar-servico", methods=["GET", "POST"])
def cadastro_servico():
    if request.method == "POST":
        nome = request.form.get("nome", "").strip()
        try:
            valor = float(request.form.get("valor", 0))
            if not nome:
                flash("Erro: O nome do serviço é obrigatório.", "error")
            else:
                sistema.cadastrar_servico(nome, valor)
                flash(f"Serviço '{nome}' cadastrado com sucesso.", "success")
                return redirect(url_for("listar_servicos"))
        except ValueError:
            flash("Valor inválido.", "error")
    return render_template("cadastrar_servico.html")

@app.route("/servicos")
def listar_servicos():
    servicos = sistema.listar_servicos()
    return render_template("listar_servicos.html", servicos=servicos)

@app.route("/agendar", methods=["GET", "POST"])
def agendar():
    servicos = sistema.listar_servicos()

    if request.method == "POST":
        escolha = int(request.form.get("servico")) - 1
        cliente = request.form.get("cliente")
        data = request.form.get("data")
        horario = request.form.get("horario")

        if sistema.criar_agendamento(cliente, escolha, data, horario):
            flash("Agendamento realizado com sucesso.", "success")
        else:
            flash("Número de serviço inválido.", "error")

            return redirect(url_for("agendar"))
    return render_template("agendar.html", servicos=servicos)

@app.route("/agendamentos")
def listar_agendamentos():
    agendamentos = sistema.listar_agendamentos()
    return render_template("listar_agendamentos.html", agendamentos=agendamentos)

@app.route("/sair")
def sair():
    return render_template("sair.html")

if __name__ == "__main__":
    app.run(debug=True)