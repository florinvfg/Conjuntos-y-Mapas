<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Conjuntos y Mapas</title>
    <script src="script/ConjuntoYMapas2.js"></script>
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="contenedor col-8" >
    <h1>Conjuntos y Mapas</h1>
    <h2>Agenda Telefonica</h2>
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre">



    <label for="telefono">Telefono</label>
    <input type="text" id="telefono" maxlength="9">
    <p>
        <button id="agregar" class="boton">+</button>
        <button id="borrar" class="borrar">Borrar Agenda</button>
    </p>
    <p>
        <button id="cambiarPagina" class="boton" onclick="window.location.href='index.jsp'">Ir a Index</button>
    </p>
    <p class="error"></p>
    <div class="contenedor col-12">

        <table id="agenda">
            <tr>
                <th>Nombre😉</th>
                <th>Telefono😉</th>
            </tr>
        </table>

    </div>
</div>

</body>
</html>