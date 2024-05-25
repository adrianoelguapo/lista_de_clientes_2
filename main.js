let clientes = [
    {
        id: "1",
        nombre: "Adriano",
        apellidos: "Condines Celada",
        descripcion: "Cliente 1 de la mejor empresa del mundo",
        foto: "./images/adriano.jpg"
    },
    {
        id: "2",
        nombre: "Bruno",
        apellidos: "Fandño Veiga",
        descripcion: "Cliente 2 de la mejor empresa del mundo",
        foto: "./images/bruno.png"
    },
    {
        id: "3",
        nombre: "Noel",
        apellidos: "Santiañez Rodriguez",
        descripcion: "Cliente 3 de la mejor empresa del mundo",
        foto: "./images/noel.jpg"
    },
    {
        id: "4",
        nombre: "Javier",
        apellidos: "Pastor Rodríguez",
        descripcion: "Cliente 4 de la mejor empresa del mundo",
        foto: "./images/javi.jpg"
    },
    {
        id: "5",
        nombre: "Nico",
        apellidos: "Acuña Marcote",
        descripcion: "Cliente 5 de la mejor empresa del mundo",
        foto: "./images/nico.jpg"
    },
    {
        id: "6",
        nombre: "Nico",
        apellidos: "Fernández Mosquera",
        descripcion: "Cliente 6 de la mejor empresa del mundo",
        foto: "./images/nicofer.jpg"
    },
    {
        id: "7",
        nombre: "Eder",
        apellidos: "Martínez Castro",
        descripcion: "Cliente 7 de la mejor empresa del mundo",
        foto: "./images/eder.png"
    },
    {
        id: "8",
        nombre: "Birhan",
        apellidos: "Fernández Fernández",
        descripcion: "Cliente 8 de la mejor empresa del mundo",
        foto: "./images/birhan.png"
    },
    {
        id: "9",
        nombre: "Astor",
        apellidos: "Fernández Estévez",
        descripcion: "Cliente 9 de la mejor empresa del mundo",
        foto: "./images/astor.jpg"
    },
    {
        id: "10",
        nombre: "Roberto",
        apellidos: "Castro Liste",
        descripcion: "Cliente 10 de la mejor empresa del mundo",
        foto: "./images/rober.jpg"
    },
    {
        id: "11",
        nombre: "David",
        apellidos: "Álvarez Durán",
        descripcion: "Cliente 11 de la mejor empresa del mundo",
        foto: "./images/david.webp"
    }
];

$(function(){

    function cargarClientes(){
        $(".clientes").empty(); // Vaciar contenedor antes de cargar clientes
        for (let i = 0; i < clientes.length; i++){
            $(".clientes").append('<div class = "tarjeta" id = "' + clientes[i].id + '" >' + '<div class = "fotocliente">' + '<img src = "' + clientes[i].foto + '">' + '</div>' + '<div class = "datoscliente">' + '<div class = "nombrecliente">' + '<p>' + clientes[i].nombre +'</p>' + '</div>' + '<div class = "apellidoscliente">' + '<p>' + clientes[i].apellidos +'</p>' + '</div>' + '<div class = "descripcioncliente">' + '<p>' + clientes[i].descripcion +'</p>' + '</div>' + '<div class = "borrar">'  + '<input type = "button" value = "Borrar usuario">' + '</div>' + '</div>' + '</div>');
        }
    }
    
    cargarClientes();

    $(".clientes").on("click", ".borrar input[type='button']", function(){
        let idClienteBorrar = $(this).closest(".tarjeta").attr("id");
        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].id == idClienteBorrar) {
                clientes.splice(i, 1);
                break;
            }
        }
        cargarClientes();
    });

    $(".buscador").keyup(function(){
        let valorBusqueda = $(".buscador").val().toLowerCase();
        $(".clientes").empty();

        for (let i = 0; i < clientes.length; i++){
            if (clientes[i].nombre.toLowerCase().includes(valorBusqueda)){
                $(".clientes").append('<div class = "tarjeta" id = "' + clientes[i].id + '" >' + '<div class = "fotocliente">' + '<img src = "' + clientes[i].foto + '">' + '</div>' + '<div class = "datoscliente">' + '<div class = "nombrecliente">' + '<p>' + clientes[i].nombre +'</p>' + '</div>' + '<div class = "apellidoscliente">' + '<p>' + clientes[i].apellidos +'</p>' + '</div>' + '<div class = "descripcioncliente">' + '<p>' + clientes[i].descripcion +'</p>' + '</div>' + '<div class = "borrar">'  + '<input type = "button" value = "Borrar usuario">' + '</div>' + '</div>' + '</div>');
            }
        }
    });

    var modal = $("#modalañadircliente");

    var btn = $(".botonmodal");

    var span = $(".cerrar");

    btn.click(function() {
        modal.show();
    });

    span.click(function() {
        modal.hide();
    });

    $("#formularioañadir").submit(function(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        var nombre = $("#nombre").val();
        var apellidos = $("#apellidos").val();
        var descripcion = $("#descripcion").val();
        var foto = $("#foto").val();

        // Crear un nuevo cliente
        var nuevoCliente = {
            id: (clientes.length + 1).toString(),
            nombre: nombre,
            apellidos: apellidos,
            descripcion: descripcion,
            foto: foto
        };

        clientes.push(nuevoCliente);

        cargarClientes();

        modal.hide();

        $("#formularioañadir")[0].reset();
    });
});
