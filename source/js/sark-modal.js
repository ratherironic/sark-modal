(function ( $ ) {

	var methods = {
		
		settings : {
			'location': 'body',
			'modalContent': '',
			'mask': true,
			'animationType': 'fade-in'
		},
		config : {

		},
		
		'init': function ( options ) {
			return this.each(function () {
				
				methods.settings = $.extend({}, methods.settings, options);
				
				if ( methods.settings.modalContent ) {
					methods.render();
				} 

			});
			
		},

		'render': function () {
		
			methods.setClickEvents();
			methods.renderModal();
			methods.addModalContent();
			methods.setLeftPosition();
			
		},

		'renderModal': function () {
			
			var modalHTML = '<div id="modal"><div id="modal-content"></div><a href="#" id="close-modal">X</a></div>';
			
			if ( $('#mask').length === 0 && methods.settings.mask ) {
				$(methods.settings.location).prepend('<div id="mask" />');
			}
			
			if ( methods.settings.mask ) {
				$('#mask').after(modalHTML);
			} else {
				$(methods.settings.location).prepend(modalHTML);
			}
			
			methods.addModalContent();
		},

		'addModalContent': function () {

			var $modalContent = methods.settings.modalContent,
				$contentWrapper = $('#modal-content');
			
			if ( $('#modal').length !== 0 ) {
				$contentWrapper.empty();
			}
			
			$contentWrapper.append($modalContent);
		
			methods.showContent();
			
		},

		'setClickEvents': function () {

			$(document).on('click', '#mask, #close-modal', function (e) {
				methods.hideContent(e);
			});
			
		},

		'showContent': function () {
			
			setTimeout(function () {
				$('#close-modal, #modal-content, #modal, #mask').addClass('sark-'+methods.settings.animationType);
			},200);

		},

		'hideContent': function (e) {

			e.preventDefault();

			$('#close-modal, #modal-content, #modal, #mask').removeClass('sark-'+methods.settings.animationType);

			setTimeout(function () {
				$('#close-modal, #modal-content, #modal, #mask').remove();
			},1000);
			
		},

		'setLeftPosition': function () {

			var modalWidth = ( 100 * parseFloat($('#modal').css('width')) / parseFloat($(methods.settings.location).css('width')) ),
				fullParentWidth = 100,
				leftPercentage = (fullParentWidth - modalWidth) / 2;

			$('#modal').css('left', leftPercentage + '%');

		}
	};

	$.fn.sarkModal = function (options) {
		
		return methods.init.apply( this, arguments );

	};
})(jQuery);

