$('.view').removeClass('active');
myApp.showTab('#view-4');

if (getCookie('id_usuario') !== '') {

} else {

}

var swiper1 = new myApp.swiper('.swiper-1', {
	pagination:'.swiper-pagination-1',
	spaceBetween: 0,
	speed: 600
});

$('#tb4').on('click',function(){
	//window.setTimeout (function() {
	//	swiper1.update();
	//}, 0);
});

$('#btnIngresar').on('click', function () {
	if ($('#txtUsuario').val() != '' && $('#txtContrasena').val() != '') {
		if( $('#txtUsuario').val() === "diegodigital@gmail.com" && $('#txtContrasena').val() === "diegodigital"){
			myApp.showTab('#view-5');
			$("#tbMenu").attr("hidden",false);

			setCookie('id_usuario', 1);
		}else{
			myApp.alert('Usuario y/o contraseña invalidos', 'Colsubsidio');
		}
		
	} else {
		myApp.alert('Ingrese su usuario y contraseña', 'Referidos');
	}
});

$('#btnSalir').on('click', function () {
	deleteCookie('id_usuario');
	$('#txtUsuario, #txtContrasena').val('');
	$('.divLogin').show();
	$('.divRegister, #tb3').hide();
});


$('#btnRegistrar').on('click', function () {
	$('.divLogin').hide();
	$('.divRegister').show();	
	$('#chkModificar').prop('checked', true);
	$('#btnSalir').html('Cancelar');
	$('#divGuardarUsuario').show();
	$('#txtNombre, #txtApellido, #txtIdentificacion, #txtEmail, #txtPassword, #txtPassword2, #txtTelefono').prop('disabled', false).val('');
	$('#cmbGenero').prop('disabled', false).val('M');
});  

$('#lnkEnterate').on('click', function () {
	myApp.showTab('#view-5');
});

$('#lnkPortafolio').on('click', function () {
	myApp.showTab('#view-1');
});

$('#lnkProyectos').on('click', function () {
	myApp.showTab('#view-2');
});

$('#lnkTerCond').on('click', function () {
	myApp.showTab('#view-5');
});