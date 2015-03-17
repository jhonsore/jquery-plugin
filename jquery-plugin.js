(function($){
		
	//
	$.fn.boilerplate = function( method )
	{
		var methods =
		{
			init :										function( options ){ 			return this.each(function(){	_init(this, options);});},
			callMethod :								function( options ){ 			return this.each(function(){	_callMethod(this,options);});},
			destroy :									function( options ){ 			return this.each(function(){	_destroy(this,options);});}
		};
		
		//----------------------------------------------------------------------
		//----------------------------------------------------------------------
		var defaults =
		{
			property01					: '',
			property02					: false,
			method						: function() {}
		};
		
		var boilerplate_settings;
		var boilerplate_element;
		
		//----------------------------------------------------------------------
		//----------------------------------------------------------------------

		// Method calling logic
		if ( methods[method] )//caso exista um método, esse método é chamado
		{
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		}
		else if ( typeof method === 'object' || ! method )//caso não exista um método ou seja apenas passado o objeto
		{
			return methods.init.apply( this, arguments );
		}
		else//caso o método não exista
		{
		  $.error( 'Method ' +  method + ' does not exist on jQuery.boilerplate' );
		}
		
		function _init($this, options)
		{
			boilerplate_element 						= $($this);
			boilerplate_settings 						= $.extend(defaults, options);				
			initialize($this);
			_activate();
		}
		
		function initialize($this)
		{
			console.log('plugin inicializado com propriedade : '+boilerplate_settings.property01);		
			
		}
		
		function _activate () {
			console.log("activate is returning values");
			boilerplate_settings.activate.call(this, {val:"este é o valor a ser devolvido", val2:"Valor 2"});
		}
		
		function _callMethod ( $obj, $property ) {
			console.log("item : "+$obj);
			console.log("dados : "+$property.value+" / "+$property.value2);
		}
		
		function _destroy ( $obj, $property ) {
			$($obj).css({backgroundColor:"#000000"});
			console.log("destroy : "+$property.value+" / "+$property.value2);
		}
		
    
	};//-------------------------------
})(jQuery);
