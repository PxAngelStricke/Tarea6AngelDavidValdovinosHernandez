function myFunction() {
    var contador = 0;

    //Obtener nombre
    let x0 = document.getElementById("nombre").value;


    //Validar numero de control
    let x1 = document.getElementById("numero_control").value;
    const regex = /^(m|c)?[0-9]{2}(120|121)[0-9]{3}$/i;
    var numControl;
  
    if (regex.test(x1)) {
      text="Numero de control valido";
      numControl = regex.exec(x1);
      contador++;
      var valNumControl = document.getElementById("valida_numero_control");
      valNumControl.style.color = 'greenyellow';
    }
    else {
      text="Numero de control no valido";
      var valNumControl = document.getElementById("valida_numero_control");
      valNumControl.style.color = '#FF0000';
    }
  
    document.getElementById("valida_numero_control").innerHTML = text;


    //Validar numero RFC
    let x2 = document.getElementById("numero_RFC").value;
    const regex2 = /^[A-Z]{4}([0-9]{6})\w{3}$/i;
    var fechaNac;
  
    if (regex2.test(x2)) {
      text="Numero RFC valido";
      fechaNac = regex2.exec(x2);
      contador++;
      var valNumRFC = document.getElementById("valida_numero_RFC");
      valNumRFC.style.color = 'greenyellow';
    }
    else {
      text="Numero RFC no valido";
      var valNumRFC = document.getElementById("valida_numero_RFC");
      valNumRFC.style.color = '#FF0000';
    }
  
    document.getElementById("valida_numero_RFC").innerHTML = text;


    //Validar numero de telefono
    let x3 = document.getElementById("numero_telefono").value;
    const regex3 = /^(443)[0-9]{7}$/i;
  
    if (regex3.test(x3)) {
      text="Numero de telefono valido";
      contador++;
      var valNumTelefono = document.getElementById("valida_numero_telefono");
      valNumTelefono.style.color = 'greenyellow';
    }
    else {
      text="Numero de telefono no valido";
      var valNumTelefono = document.getElementById("valida_numero_telefono");
      valNumTelefono.style.color = '#FF0000';
    }
  
    document.getElementById("valida_numero_telefono").innerHTML = text;


    //Validar correo electronico
    let x4 = document.getElementById("correo").value;
    const regex4 = /^l((m|c)?[0-9]{2}(120|121)[0-9]{3})@morelia.tecnm.mx$/i;
    var correoElectronico;
  
    if (regex4.test(x4)) {
      correoElectronico = regex4.exec(x4);
      if(correoElectronico[1] == numControl[0]){
        text="Corrreo electronico valido";
        contador++;
        var valCorreo = document.getElementById("valida_correo");
        valCorreo.style.color = 'greenyellow';
      }
      else {
        text="El numero de control y correo no coinciden";
        var valCorreo = document.getElementById("valida_correo");
        valCorreo.style.color = '#FF0000';
      }
    }
    else {
      text="Correo electronico no valido";
      var valCorreo = document.getElementById("valida_correo");
      valCorreo.style.color = '#FF0000';
    }
  
    document.getElementById("valida_correo").innerHTML = text;


    //Mostrar mensaje
    if(contador == 4){
      text="Usuario verificado: " + x0 +" Nacido en la fecha: " + fechaNac[1];
      var usuario = document.getElementById("usuario_verificado");
      usuario.style.color = 'greenyellow';
    } else {
      text="Algun dato está erroneo, verifica tus datos.";
      var usuario = document.getElementById("usuario_verificado");
      usuario.style.color = '#FF0000';
      usuario.style.fontWeight = 'bold';
    }
    document.getElementById("usuario_verificado").innerHTML = text;
  
  }